import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMatchMedia";
import styles from "./Navbar.module.css";

interface NavLinkType {
  name: string;
  path: string;
}

export const navLinks: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "Things to Do", path: "/things-to-do" },
  { name: "Places to Stay", path: "/places-to-stay" },
  { name: "Food & Drink", path: "/food-and-drink" },
  { name: "Travel Tips", path: "/travel-tips" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [isOpen, setIsOpen] = useState(false);

  return isMobile ? (
    <nav className={styles.mobileNav}>
      <Hamburger onToggle={() => setIsOpen(!isOpen)} />
      <ul className={isOpen ? styles.open : styles.closed}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className={styles.desktopNav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
