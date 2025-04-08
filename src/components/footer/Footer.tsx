import React from "react";
import styles from "./Footer.module.css";
import { navLinks } from "../navbar/Navbar";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
      <h2 className={styles.islandTitle}>Taniti</h2>
      <div>
        <h3>Visitor Center</h3>
        <p>1234 Paradise Lane</p>
        <p>Taniti Island, Tropical Ocean</p>
        <p>ZIP Code: 98765</p>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>Phone Number: 123-456-7890</p>
        <p>Email: info@govisittaniti.com</p>
      </div>
    </footer>
  );
};

export default Footer;
