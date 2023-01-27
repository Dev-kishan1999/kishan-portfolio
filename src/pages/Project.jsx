import React from "react";
import projects from "../data/myprojects.json";
import styles from "./project.module.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
const Project = () => {
  console.log(projects);
  return (
    <motion.div className={styles.projectWrapper}>
      <Navbar title="Projects" />
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return <Card project={project} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Project;
