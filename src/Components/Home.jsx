import React from "react";
import styles from "../CSS/Home.module.css";
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import photo from "../Image/harshalphoto.jpg";
import myresume from "../Resume/myresume.pdf";

const Home = () => {
  const handleEmail = () => {
    alert("Email:-harshalptil655@gmail.com");
  };

  return (
    <div className={styles.home} id={"home"}>
      <div className={styles.homeflex}>
        <div style={{ color: "#018ec4" }}>
          <div className={styles.weblink}>
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
            <h1 className={styles.myh1}>
              {" "}
              <span
                style={{
                  fontSize: "40px",
                  marginLeft: "-300px",
                }}
              >
                Hi,
              </span>
            </h1>
            <h1
              className={styles.myname}
              style={{ marginTop: "-20px", textAlign: "start" }}
            >
              I am Harshal Patil
            </h1>
          </div>
          <div className={styles.titleitemwrapper}>
            <h4 className={styles.titleitem} style={{ marginTop: "-20px" }}>
              Full Stack Web Developer
            </h4>
          </div>
          <div>
            <p className={styles.myp} style={{ marginTop: "-10px" }}>
              Skilled in react and redux and capable of making any kind of
              website{" "}
            </p>
          </div>
          <div>
            <a href={myresume} target="_blank" rel="noreferrer" download>
              <button className={styles.homebtn}> Download Resume</button>
            </a>
          </div>
        </div>
        <div>
          <div>
            {/* <img className={styles.myimg} src={photo} alt="Harshal Patil" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
