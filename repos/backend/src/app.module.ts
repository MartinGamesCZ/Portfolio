import { Module } from '@nestjs/common';
import { SshModule } from './routes/ssh/ssh.module.js';
import { SiteModule } from './routes/site/site.module.js';

@Module({
  imports: [SshModule, SiteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
