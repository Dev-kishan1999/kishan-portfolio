import React from "react";
import styles from "./card.module.css";
const Card = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <div className={styles.tech}>
          {project.technology.map((tech, index) => {
            return (
              <div className={styles.techP}>
                <p key={index}>{tech}</p>
              </div>
            );
          })}
        </div>
        <hr
          style={{ width: "100%", color: "#f08080", borderColor: "#f08080" }}
        />
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.gitlink}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
