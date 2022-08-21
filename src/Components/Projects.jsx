import React from "react";
import styles from "../CSS/Projects.module.css";
import anthropologie from "../Image/anthropologie.PNG";
import ssence from "../Image/ssence.PNG";

export const Projects = () => {
  return (
    <div className={styles.projects} id={"projects"}>
      <div className={styles.projecttitle}>
        <h1 style={{ textDecoration: "underline", marginTop: "30px" }}>
          Projects
        </h1>
        <p
          style={{
            marginTop: "-18px",
            fontWeight: "600",
            color: "gray",
            marginBottom: "50px",
          }}
        >
          Projects completed during construct weeks
        </p>
      </div>
      {/* ///////// */}
      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img
              className={styles.clonewebimg}
              src={anthropologie}
              alt="Anthropologie"
            />
          </div>
          <div
            className={styles.logosmargin}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div className={styles.logomarginleft}>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/html_5_e17a3be25f.svg"
                alt="HTML"
              />
              <p className={styles.projectp}>HTML</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/css_3_3dbbdc86b6.svg"
                alt="CSS"
              />
              <p className={styles.projectp}>CSS</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/javascript_96690a83df.svg"
                alt="JavaScript"
              />
              <p className={styles.projectp}>JavaScript</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/react_fd582ea59b.svg"
                alt="React"
              />
              <p className={styles.projectp}>React</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="data:image/png;base64,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"
                alt="Chakra-UI"
              />
              <p className={styles.projectp}>Chakra-UI</p>
            </div>
          </div>
        </div>
        <div className={styles.projectdetails}>
          <div>
            <div>
              <h1>Anthropologie-Clone</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                This website is build to purchase women's clothing,jewelery and
                home,kitchen decoration products.
              </p>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                You can purchase specially design fashion cloths only for
                women's.
              </p>
              <p className={styles.projectspecs}>
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                A individual project, build in 5 days by me.
              </p>
            </div>
            <div>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://anthropologie-website-clone.netlify.app/"
                >
                  Live Site
                </a>{" "}
              </button>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://github.com/harshalpatil655/parsimonious-push-9068"
                >
                  Github Repo
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /22ssenceclone//////////////////////////////////////////////// */}

      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img
              className={styles.clonewebimg}
              src={ssence}
              alt="Apple-Clone"
            />
          </div>
          <div
            className={styles.logosmargin}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/html_5_e17a3be25f.svg"
                alt="HTML"
              />
              <p className={styles.projectp}>HTML</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/css_3_3dbbdc86b6.svg"
                alt="CSS"
              />
              <p className={styles.projectp}>CSS</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/javascript_96690a83df.svg"
                alt="JavaScript"
              />
              <p className={styles.projectp}>JavaScript</p>
            </div>
          </div>
        </div>
        <div className={styles.projectdetails}>
          <div>
            <div>
              <h1>SSENCE-Clone</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                This website is made to sell the specially designs cloths for
                different occasions you can purchase cloths for men,women and
                kids.
              </p>

              <p className={styles.projectspecs}>
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                A collaborative project, build in 5 days by team of 4
                developers.
              </p>
            </div>
            <div>
              <button className={styles.projectbutton}>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://ssence-website-clone.netlify.app/"
                >
                  Live Site
                </a>
              </button>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://github.com/harshalpatil655/SSENCE-CLONE-MASAI"
                >
                  Github Repo
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////// */}
    </div>
  );
};
