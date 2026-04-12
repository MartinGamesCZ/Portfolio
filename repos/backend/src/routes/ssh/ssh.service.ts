import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import ssh2 from 'ssh2';
import type {
  Connection,
  AuthContext,
  AcceptConnection,
  Session,
  SessionAccept,
  PseudoTtyInfo,
  ServerChannel,
  Server as TServer,
} from 'ssh2';
import { readFile, stat } from 'fs/promises';
import { AppConfig } from '../../config.js';
import { renderTui } from '../../tui/index.js';
import { SshKey } from '../../types/keys.js';

const { Server } = ssh2;

@Injectable()
export class SshService implements OnModuleInit {
  #sshServer: TServer;
  #logger = new Logger(SshService.name);

  async onModuleInit() {
    this.#logger.log('Initializing SSH server...');

    const privateHostKey = await this.#getPrivateHostKey();

    this.#sshServer = new Server({
      hostKeys: [privateHostKey],
    });

    this.#sshServer.on('connection', this.#onClientConnection.bind(this));

    this.#sshServer.listen(AppConfig.ssh.port, () => {
      this.#logger.log(`SSH server started on port ${AppConfig.ssh.port}`);
    });
  }

  async #onClientConnection(client: Connection) {
    this.#logger.log('Client connected');

    client.on('authentication', this.#onClientAuthentication.bind(this));
    client.on('session', this.#onClientSession.bind(this));
  }

  async #onClientAuthentication(auth: AuthContext) {
    // Always accept - no auth needed
    auth.accept();
  }

  async #onClientSession(accept: AcceptConnection<Session>) {
    const session = accept();

    session.once('pty', (accept, _, info) =>
      this.#onSessionPty(session, accept, info),
    );
  }

  async #onSessionPty(
    session: Session,
    accept: SessionAccept,
    info: PseudoTtyInfo,
  ) {
    accept();

    session.once('shell', (accept) => this.#onSessionShell(info, accept));
  }

  async #onSessionShell(
    info: PseudoTtyInfo,
    accept: AcceptConnection<ServerChannel>,
  ) {
    const stream = accept();

    const unmount = await renderTui(stream, info);

    stream.on('error', (error) => this.#logger.error(error));
    stream.on('close', () => unmount());
    stream.on('data', (data: Buffer) => {
      if (data[0] === SshKey.CtrlC) {
        unmount();

        stream.end();
      }
    });
  }

  async #getPrivateHostKey() {
    const fileExists = !!(await stat(AppConfig.ssh.keys.private).catch(
      () => false,
    ));
    if (!fileExists) throw new Error('Private host key not found');

    return await readFile(AppConfig.ssh.keys.private);
  }
}
