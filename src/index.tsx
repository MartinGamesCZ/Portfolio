import { exists, readFile } from "fs/promises";
import { Box, render, Text } from "ink";
import { Server } from "ssh2";

const keyExists = await exists("keys/host_key");
if (!keyExists)
  throw new Error(
    "Host key not found, generate it via ./scripts/generate-keys.sh",
  );

new Server(
  {
    hostKeys: [await readFile("keys/host_key")],
  },
  (client) => {
    client.on("authentication", (auth) => {
      auth.accept();
    });

    client.on("session", (accept) => {
      const session = accept();

      session.once("pty", (accept, _, info) => {
        accept();

        session.once("shell", (accept) => {
          const stream = accept();

          Object.assign(stream, {
            columns: info.cols,
            rows: info.rows,
            isTTY: true,
          });

          stream.on("error", () => {});

          const { unmount } = render(
            <App cols={info.cols} rows={info.rows} />,
            {
              stdout: stream as any,
              stderr: stream as any,
              stdin: stream as any,
              patchConsole: false,
              exitOnCtrlC: false,
            },
          );

          stream.on("close", () => unmount());
        });
      });
    });
  },
).listen(2222);

interface IAppProps {
  cols: number;
  rows: number;
}

export function App({ cols, rows }: IAppProps) {
  return (
    <Box width={cols} height={rows}>
      <Text>Hello</Text>
    </Box>
  );
}
