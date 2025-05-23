import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { navLinks } from "../navbar/Navbar";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      setShowBackToTop(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBackToTop && (
        <button className={styles.backToTopButton} onClick={scrollToTop}>
          Back to Top
        </button>
      )}
      <footer>
        <h2 className={styles.islandTitle}>Taniti</h2>
        <div>
          <h4>Visitor Center</h4>
          <p>1234 Paradise Lane</p>
          <p>Taniti Island, Tropical Ocean</p>
          <p>ZIP Code: 98765</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>Phone Number: 123-456-7890</p>
          <p>Email: info@govisittaniti.com</p>
        </div>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
