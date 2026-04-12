import { Module } from '@nestjs/common';
import { SiteController } from './site.controller.js';
import { SiteService } from './site.service.js';

@Module({
  imports: [],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
