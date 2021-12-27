import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiX } from "react-icons/fi";

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
            <div className={headerStyles.dismiss}>
              <button onClick={handleClose}>
                <FiX style={{ fontSize: "1.2rem" }} />
              </button>
            </div>
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
        <button onClick={handleOpen} className={headerStyles.hamburger}>
          <span className={headerStyles.bar}></span>
          <span className={headerStyles.bar}></span>
          <span className={headerStyles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
