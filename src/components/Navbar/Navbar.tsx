import useStyles from "@/hooks/useStyles";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

// Link configuration
const NavbarLinks = [
  {
    href: "#",
    label: "Home",
    condition: "{{scroll_percentage}} < 100",
    scroll: "0",
  },
  {
    href: "#",
    label: "Projects",
    condition: "{{scroll_percentage}} >= 100 && {{scroll_percentage}} < 200",
    scroll: "{{window_height}} / 3",
  },
  {
    href: "#",
    label: "Contact",
    condition: "{{scroll_percentage}} >= 200",
    scroll: "{{window_height}} / 3 * 3",
  },
];

// Type declarations for NavbarLink component props
interface INavbarLinkProps {
  href: string;
  label: string;
  active: boolean;
}

// Main navbar on the website
export default function Navbar() {
  const classes = useStyles(styles);

  // States
  const [active, setActive] = useState("Home");

  // Scroll listener
  useEffect(() => {
    const listener = (e: Event) => {
      const scroll = window.scrollY;
      const max_scroll = document.body.scrollHeight - window.innerHeight;

      const scroll_percentage = (scroll / max_scroll) * 300;

      const active = NavbarLinks.find((link) => {
        return eval(
          link.condition.replaceAll(
            "{{scroll_percentage}}",
            scroll_percentage.toString()
          )
        );
      });

      setActive(active?.label ?? NavbarLinks[0].label);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  // Get link components array
  const Links = NavbarLinks.map((link) => (
    <NavbarLink key={link.label} {...link} active={link.label == active} />
  ));

  // Component structure
  return (
    <nav className={classes("main")}>
      <div className={classes("vertical_line")}></div>
      <div className={classes("vline_dots", "vline_dots_top")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes("vline_dots", "vline_dots_bottom")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={classes("links")}>{Links}</ul>
    </nav>
  );
}

// Navbar link component
function NavbarLink({ href, label, active }: INavbarLinkProps) {
  const classes = useStyles(styles);

  // Function to scroll to specific element
  const scrollTo = (label: string) => {
    // TODO: Bugfix - jumps to y = 0
    // Scroll window to specific y position
    window.scrollTo(
      0,
      parseFloat(
        eval(
          (
            NavbarLinks.find((link) => link.label == label) as unknown as any
          ).scroll.replaceAll(
            "{{window_height}}",
            window.innerHeight.toString()
          ) ?? "0"
        )
      )
    );
  };

  // Component structure
  return (
    <li
      className={classes("link_main")}
      data-active={active}
      onClick={() => scrollTo(label)}
    >
      <Link href={href} className={classes("link_anchor")} data-active={active}>
        {label}
      </Link>
      <div className={classes("link_dot")} data-active={active}></div>
    </li>
  );
}
