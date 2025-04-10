import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, NavLink } from "react-router-dom";

const Header = ({ src }: { src: string }) => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <header className={styles.mainHeader}>
        <h1 className={styles.islandTitle}>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            Taniti
          </Link>
        </h1>
        <Navbar />
      </header>
      <video src={src} autoPlay loop playsInline muted />
      <div className={styles.breadcrumbsWrapper}>
        {breadcrumbs.map(({ match, breadcrumb }) => {
          return (
            <NavLink key={match.pathname} to={match.pathname}>
              {breadcrumb}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Header;
