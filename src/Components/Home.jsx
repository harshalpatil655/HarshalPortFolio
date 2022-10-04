import React from "react";
import styles from "../CSS/Home.module.css";
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import photo from "../Image/harshalphoto.jpg";
import Harshal_Patil_Resume from "../Resume/Harshal_Patil_Resume.pdf";

const Home = () => {
  const handleEmail = () => {
    alert("Email:-harshalptil655@gmail.com");
  };

  return (
    <div className={styles.home} id={"home"}>
      <div className={styles.homeflex}>
        <div className={styles.weblink}>
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/harshalpatil655"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillLinkedin
                style={{ paddingLeft: "70px", color: "#00a3d8" }}
                size={40}
              />
            </a>
          </div>
          <div className={styles.aboutgithub}>
            <a
              href="https://github.com/harshalpatil655"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillGithub
                size={40}
                style={{
                  marginBottom: "30px",
                  marginTop: "20px",
                  paddingLeft: "70px",
                  color: "#00a3d8",
                }}
              />
            </a>{" "}
          </div>
          <div className={styles.abtmail}>
            {" "}
            <AiTwotoneMail
              onClick={handleEmail}
              size={40}
              style={{ paddingLeft: "70px" }}
            />
          </div>
        </div>
        <div className={styles.taketotop}>
          <div>
            <h1 className={styles.text}>Hello, 👋 </h1>
            <h1 className={styles.myname}>
              My name is <span className={styles.name}>Harshal Patil</span>
            </h1>
          </div>
          <div className={styles.titleitemwrapper}>
            <h4 className={styles.titleitem}>Full Stack Web Developer</h4>
          </div>
          <div>
            <p className={styles.homep}>
              Passionate about learning new technologies, and Interested in
              creating web applications & providing solutions to a real-world
              problems.
            </p>
          </div>
          <div>
            <a
              href={Harshal_Patil_Resume}
              target="_blank"
              rel="noreferrer"
              download
            >
              <button className={styles.homebtn}> Download Resume</button>
            </a>
          </div>
        </div>
        <div>
          <img className={styles.abtimage} src={photo} alt="Imageharshal" />
        </div>
      </div>
    </div>
  );
};

export default Home;
