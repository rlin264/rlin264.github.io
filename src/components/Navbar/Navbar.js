import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = withRouter(function (props) {
  const url = props.location.pathname;

  return (
    <div className={styles.navbarContainer}>
      <nav>
        <Link to="/" className={styles.logo}>
          Raymond Lin
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.defaultLink}>
            About
          </Link>
          <Link to="/blog" className={styles.defaultLink}>
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
});

export default Navbar;
