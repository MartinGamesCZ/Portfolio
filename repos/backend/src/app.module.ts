import { Module } from '@nestjs/common';
import { SshModule } from './routes/ssh/ssh.module.js';

@Module({
  imports: [SshModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
