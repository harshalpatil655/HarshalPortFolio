import React from "react";
import styles from "../CSS/About.module.css";

const About = () => {
  return (
    <div className={styles.about} id={"about"}>
      <div className={styles.toptitle}>
        <h1 className={styles.abtname}>About Me</h1>
        <p className={styles.abtsubname}>My Introduction</p>
      </div>
      <div className={styles.abtdata}>
        <div className={styles.abtflex}>
          <div>
            <div className={styles.abtpara}>
              An enthusiastic fresher seeking a career with a progressive
              organization to capitalize my skills and abilities in the ﬁeld of
              information technology and eager to learn new technologies and
              methodologies.
            </div>
            <div className={styles.abtnumbers}>
              <div>
                <h3>1200+</h3>
                <p
                  style={{
                    marginTop: "-18px",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  hours of coding
                </p>
              </div>
              <div>
                <h3>5+</h3>
                <p
                  style={{
                    marginTop: "-18px",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  {" "}
                  website clone projects
                </p>
              </div>
              <div>
                <h3>10+</h3>
                <p
                  style={{
                    marginTop: "-18px",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Tech Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
