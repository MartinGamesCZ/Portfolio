import { Controller, Get } from '@nestjs/common';
import { SiteService } from './site.service.js';
import type {
  ISiteHeroConfig,
  ISiteNavbarConfig,
} from '../../types/api/site.js';

@Controller('/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('/navbar')
  async getNavbarConfig(): Promise<ISiteNavbarConfig> {
    return await this.siteService.getNavbarConfig();
  }

  @Get('/hero')
  async getHeroConfig(): Promise<ISiteHeroConfig> {
    return await this.siteService.getHeroConfig();
  }
}
