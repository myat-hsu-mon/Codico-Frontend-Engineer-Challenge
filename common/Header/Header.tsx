import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo-codigo-red.svg";
import headerStyles from "./Header.module.scss";

const navs = [
  {
    name: "Work",
    href: "/work?tags=all",
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

const Header: NextPage = () => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.navbar}>
      <Link href="#" passHref>
        <a className={headerStyles.navLogo}>
          <Image src={Logo} alt="Codico Logo" width={145} height={33} />
        </a>
      </Link>
      <ul className={headerStyles.navMenu}>
        {navs.map(({ name, href }) => (
          <li className={headerStyles.navItem} key={name}>
            <Link href={href} passHref>
              <a className={headerStyles.navLink}>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={headerStyles.hamburger}>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
      </div>
    </nav>
  </header>
);

export default Header;
