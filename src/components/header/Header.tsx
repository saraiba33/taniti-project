import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = ({ src }: { src: string }) => {
  return (
    <>
      <header className={styles.mainHeader}>
        <h1 className={styles.islandTitle}>Taniti</h1>
        <Navbar />
      </header>
      <video src={src} autoPlay loop playsInline muted />
    </>
  );
};

export default Header;
