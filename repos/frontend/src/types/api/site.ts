export interface ISiteNavbarLinkConfig {
  title: string;
  href: string;
}

export interface ISiteNavbarIconLinkConfig {
  icon: string;
  href: string;
}

export interface ISiteNavbarConfig {
  title: string;
  links: (ISiteNavbarLinkConfig | ISiteNavbarIconLinkConfig)[];
}

export interface ISiteHeroButtonConfig {
  text: string;
  href: string;
}

export interface ISiteHeroConfig {
  topHintText: string;
  topSubHeading: string;
  heading: string;
  bottomSubHeading: string;
  bottomHintText: string;
  firstButton: ISiteHeroButtonConfig;
  secondButton: ISiteHeroButtonConfig;
  sshCommand: string;
}
