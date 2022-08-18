import React from "react";
import styles from "../CSS/About.module.css";
import photo from "../Image/harshalphoto.jpg";

const About = () => {
  return (
    <div className={styles.about} id={"about"}>
      <div className={styles.toptitle}>
        <h1 style={{ textDecoration: "underline" }}>About Me</h1>
        <p style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}>
          My Introduction
        </p>
      </div>
      <div className={styles.abtflex}>
        <div>
          <img className={styles.abtimage} src={photo} alt="Imageharshal" />
        </div>
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
                style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}
              >
                hours of coding
              </p>
            </div>
            <div>
              <h3>3+</h3>
              <p
                style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}
              >
                {" "}
                website clone projects
              </p>
            </div>
            <div>
              <h3>5+</h3>
              <p
                style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}
              >
                Tech Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
