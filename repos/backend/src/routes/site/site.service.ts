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
      backgroundPhrases: /*[
        // Programming
        'export',
        'function',
        'class',
        'const',
        'string',
        'int',
        'boolean',
        'interface',
        'type',
        'void',
        'null',
        'constructor',
        '<HeroBackground />',

        // Git
        'git commit -m "Fix 10, please work"',
        'git push origin main',

        // Programmer jokes/quotes
        'It works on my machine',
        'I turn coffee into code',
        'Only 99 bugs left!',
        'My software never has bugs. It just develops random features.',
        'For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match',
      ]*/ new Array(2000)
        .fill(0)
        .map(() => (Math.random() > 0.5 ? 1 : 0).toString()),
    };

    return config;
  }
}
