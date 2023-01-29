import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ title }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <h1 style={{ color: "#1d3557" }}>{title}</h1>
        <div
          className={
            clicked ? styles.navbarContainerActive : styles.navbarContainer
          }
        >
          <Link to="/" className={styles.navLinks}>
            Home
          </Link>
          <Link to="/aboutme" className={styles.navLinks}>
            About Me
          </Link>
          <Link to="/work" className={styles.navLinks}>
            Work
          </Link>
          <Link to="/projects" className={styles.navLinks}>
            Projects
          </Link>
        </div>
      </div>
      <div
        onClick={() => {
          setClicked(!clicked);
        }}
        className={styles.mobile}
      >
        {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
