import { API } from "@/api/api";
import {
  ISiteNavbarIconLinkConfig,
  ISiteNavbarLinkConfig,
} from "@/types/api/site";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface INavbarLinkProps {
  link: ISiteNavbarLinkConfig;
}

interface INavbarIconLinkProps {
  link: ISiteNavbarIconLinkConfig;
}

export async function Navbar() {
  const config = await API.site.navbar.getConfig();

  return (
    <nav className="w-full flex flex-row justify-between px-8 py-4">
      <Link
        href={"/"}
        className="text-ctp-peach hover:text-ctp-peach-900 transition-all duration-300"
      >
        {config.title}
      </Link>

      <ul className="flex flex-row gap-4 items-center justify-center">
        {config.links.map((link, index) =>
          "icon" in link ? (
            <NavbarIconLink key={index} link={link} />
          ) : (
            <NavbarLink key={index} link={link} />
          ),
        )}
      </ul>
    </nav>
  );
}

export function NavbarLink(props: INavbarLinkProps) {
  const isExternal = props.link.href.startsWith("http");

  return (
    <li key={props.link.href}>
      <Link
        href={props.link.href}
        className="hover:text-ctp-peach transition-all duration-300"
        target={isExternal ? "_blank" : "_self"}
      >
        {props.link.title}
      </Link>
    </li>
  );
}

export function NavbarIconLink(props: INavbarIconLinkProps) {
  const isExternal = props.link.href.startsWith("http");

  return (
    <li key={props.link.href}>
      <Link
        href={props.link.href}
        className="hover:text-ctp-peach transition-all duration-300"
        target={isExternal ? "_blank" : "_self"}
      >
        <Icon icon={props.link.icon} className="w-6 h-6" />
      </Link>
    </li>
  );
}
