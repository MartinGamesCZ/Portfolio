import { Module } from '@nestjs/common';
import { SshService } from './ssh.service.js';

@Module({
  imports: [],
  controllers: [],
  providers: [SshService],
})
export class SshModule {}
