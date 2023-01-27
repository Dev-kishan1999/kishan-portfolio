import React from "react";
import styles from "./aboutme.module.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUniversity,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <motion.div className={styles.aboutmeWrapper}>
      <Navbar title="About Me" />
      <motion.div className={styles.aboutme}>
        <div className={styles.name}>
          <h1>Kishan Savaliya</h1>
          <p>
            I started my journey of computer engineering from year 2016 with
            Gujarat Technological University. The courses and its projects alway
            kept my attention and interest in software development. By
            completing my masters at Dalhousie University I amplified my
            skillset and gained knowledge to use those concept at enterprise
            level.
          </p>
          <p>
            During this time, I improvised my skills in React JS, Node JS,
            GoLang, Java, Python, SQL and NoSQL databases and cloud
            technologies.
          </p>
          <h4>Contact Details:</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:kishansavaliya1999@gmail.com"
              style={{ textDecoration: "none", color: "#1d3557" }}
            >
              kishansavaliya1999@gmail.com
            </a>
          </p>
          <p>M: +1 (902) 983-2227</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/kishan-savaliya-609ab3159/"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Dev-kishan1999" className={styles.icon}>
              <FaGithubSquare />
            </a>
            <a href="https://twitter.com/ksavaliya1999" className={styles.icon}>
              <FaTwitterSquare />
            </a>
            <a href="https://google.com" className={styles.icon}>
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <div className={styles.timeline}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className={styles.timelineEle}
              contentStyle={{ background: "#2a9d8f", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #2a9d8f" }}
              iconStyle={{ background: "#2a9d8f", color: "#fff" }}
              date="Jan, 2022 - May, 2023"
              dateClassName={styles.date}
              icon={<FaUniversity />}
            >
              <h3 className="vertical-timeline-element-title">
                Master of Applied Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dalhousie University
              </h4>
              <p>Halifax, NS, Canada</p>
              <h4 className="vertical-timeline-element-subtitle">
                CGPA: 3.94 / 4
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={styles.timelineEle}
              contentStyle={{ background: "#2a9d8f", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #2a9d8f" }}
              iconStyle={{ background: "#2a9d8f", color: "#fff" }}
              icon={<FaUniversity />}
              date="Aug, 2016 - Sep, 2020"
              dateClassName={styles.date}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Eng. (Computer Eng.)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Gujarat Technological University
              </h4>
              <p>Ahmedabad, Gujarat, India</p>
              <h4 className="vertical-timeline-element-subtitle">
                CGPA: 9.48 / 10
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
