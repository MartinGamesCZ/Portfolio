import { Controller, Get } from '@nestjs/common';
import { SiteService } from './site.service.js';
import type { ISiteNavbarConfig } from '../../types/api/site.js';

@Controller('/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('/navbar')
  async getNavbarConfig(): Promise<ISiteNavbarConfig> {
    return await this.siteService.getNavbarConfig();
  }
}
