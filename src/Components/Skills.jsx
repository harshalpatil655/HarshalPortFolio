import React from "react";
import styles from "../CSS/Skills.module.css";
export const Skills = () => {
  return (
    <div className={styles.skills} id={"skills"}>
      <div className={styles.skillstitle}>
        <h1 style={{ textDecoration: "underline", marginTop: "30px" }}>
          Skills
        </h1>
        <p style={{ marginTop: "-18px", fontWeight: "600", color: "gray" }}>
          My Technical Skills
        </p>
      </div>
      <div className={styles.skillsflex}>
        <div className={styles.logodiv}>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/html_5_e17a3be25f.svg"
              alt="html"
            />
            <p>HTML</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/css_3_3dbbdc86b6.svg"
              alt="css"
            />
            <p>CSS</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/javascript_96690a83df.svg"
              alt="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/react_fd582ea59b.svg"
              alt="react"
            />
            <p>React</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/png;base64,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"
              alt="chakra-Ui"
            />
            <p>Chakra-UI</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/redux_f650f4cdbb.svg"
              alt="redux"
            />
            <p>Redux</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/nodejs_07d5eaa3a7.svg"
              alt="node-js"
            />
            <p>Node.js</p>
          </div>
          <div>
            <img
              className={styles.skillsimage}
              src="data:image/png;base64,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"
              alt="typescript"
            />
            <p>TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
