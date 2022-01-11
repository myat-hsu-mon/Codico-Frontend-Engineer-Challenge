import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "../../public/logo-codigo-red.svg";
import headerStyles from "./Header.module.scss";

const navs = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About us",
    href: "/about-us",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Header: NextPage = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <Link href="/" passHref>
          <a className={headerStyles.navLogo}>
            <Image src={Logo} alt="Codico Logo" width={145} height={33} />
          </a>
        </Link>
        <div className={headerStyles.menu}>
          <ul
            className={[
              headerStyles.navMenu,
              open ? headerStyles.show : headerStyles.hide,
            ].join(" ")}
          >
            <div className={headerStyles.dismiss}></div>
            {navs.map(({ name, href }) => (
              <li className={headerStyles.navItem} key={name}>
                <Link href={href} passHref>
                  <a
                    className={[
                      headerStyles.navLink,
                      href.includes(router.pathname)
                        ? headerStyles.activeLink
                        : headerStyles.inActiveLink,
                    ].join(" ")}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <button className={headerStyles.requestBtn}>Request a quote</button>
          <button className={headerStyles.chatBtn}>{"Let's chat"}</button>
        </div>
        <div className={headerStyles.navigation}>
          <input
            type="checkbox"
            id="navi-toggle"
            className={headerStyles.checkBox}
          />
          <label htmlFor="navi-toggle" className={headerStyles.checkLabel}>
            <span className={headerStyles.icon}></span>
          </label>
          <div className={headerStyles.navigationBackground}></div>
          <nav className={headerStyles.nav}>
            <ul className={headerStyles.list}>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  Work
                </a>
              </li>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  Solutions
                </a>
              </li>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  Services
                </a>
              </li>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  About us
                </a>
              </li>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  Blog
                </a>
              </li>
              <li className={headerStyles.item}>
                <a
                  href="#work"
                  className={[headerStyles.link, headerStyles.scale].join(" ")}
                >
                  Request a quote
                </a>
              </li>
              <li className={headerStyles.item}>
                <a href="#work" className={headerStyles.link}>
                  {"Let's chat"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
