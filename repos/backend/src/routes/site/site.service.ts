import { Injectable } from '@nestjs/common';
import type { ISiteNavbarConfig } from '../../types/api/site.js';

@Injectable()
export class SiteService {
  async getNavbarConfig(): Promise<ISiteNavbarConfig> {
    // TODO: Read from DB
    const config: ISiteNavbarConfig = {
      title: 'martinpetr.dev',
      links: [
        {
          title: 'About me',
          href: '/about',
        },
        {
          title: 'Experience',
          href: '/experience',
        },
        {
          title: 'Projects',
          href: '/projects',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
        {
          icon: 'mdi:github',
          href: 'https://github.com/MartinGamesCZ',
        },
      ],
    };

    return config;
  }
}
