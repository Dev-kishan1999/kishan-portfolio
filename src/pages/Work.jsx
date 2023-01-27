import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import styles from "./work.module.css";
import exps from "../data/exp.json";
import { FiArrowRight } from "react-icons/fi";

const Work = () => {
  const [data, setData] = useState([]);
  const [val, setVal] = useState(0);

  const { position, date, duties } = exps[val];
  return (
    <motion.div className={styles.workWrapper}>
      <Navbar title="Experience" />
      <div className={styles.work}>
        <div className={styles.btnContainer}>
          {exps.map((exp, index) => {
            return (
              <button
                key={index}
                className={val === index ? styles.actbtn : styles.btn}
                onClick={() => setVal(index)}
              >
                {exp.cmp}
              </button>
            );
          })}
        </div>
        <div className={styles.expDetails}>
          <h1>{position}</h1>
          <h3 className={styles.date}>{date}</h3>
          {duties.map((duty, index) => {
            return (
              <div className={styles.duty} key={index}>
                <FiArrowRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
