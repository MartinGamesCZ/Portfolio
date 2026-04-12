import { Injectable } from '@nestjs/common';
import type {
  ISiteHeroConfig,
  ISiteNavbarConfig,
} from '../../types/api/site.js';

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

  async getHeroConfig(): Promise<ISiteHeroConfig> {
    // TODO: Read from DB
    const config: ISiteHeroConfig = {
      topHintText: 'Software is the backbone of society.',
      topSubHeading: 'My name is',
      heading: 'Martin Petr',
      bottomSubHeading: 'I am a software engineer.',
      bottomHintText: 'Frontend. Backend. Infrastructure.',
      firstButton: {
        text: 'Contact me',
        href: '/contact',
      },
      secondButton: {
        text: 'Learn more',
        href: '/about',
      },
      sshCommand: 'ssh martinpetr.dev -p 2222',
    };

    return config;
  }
}
