import React from "react";
import { Link } from "react-router-dom";
import styles from './navbar.module.css';

const Navbar = ({title})=>{
    return(
        <nav
            className={styles.navbar}
        >
            <h1 style={{"color":"#1d3557"}}>{title}</h1>
            <div>
                <Link href="#" className={styles.navLinks}>About Me</Link>
                <Link href="#" className={styles.navLinks}>Work</Link>
                <Link href="#" className={styles.navLinks}>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;