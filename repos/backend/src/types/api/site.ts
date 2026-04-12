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
