import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import kishan from "../static/kishan.png";
import styles from "./home.module.css";
import resume from "./resume.pdf";

const Home = () => {
  return (
    <motion.div className={styles.homeWrapper}>
      <Navbar title="Kishan" />

      <motion.div className={styles.home}>
        <img src={kishan} alt="Kishan" className={styles.selfImage} />
        <div className={styles.intro}>
          <p>
            I enjoy developing things that live on the{" "}
            <span className={styles.highlightedText}>INTERNET</span>.
          </p>
          <p>
            I am a{" "}
            <span className={styles.highlightedText}>
              DevOps Engineer Intern
            </span>{" "}
            at one of North America’s well established bank, while also using
            the foundations of software engineering to support and encourage
            internal innovation and growth of organization.{" "}
          </p>
          <div className={styles.resume}>
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
