import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <h1>Taniti</h1>
      <Navbar />
    </header>
  );
};

export default Header;
