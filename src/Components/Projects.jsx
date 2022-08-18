import React from "react";
import styles from "../CSS/Projects.module.css";
import anthropologie from "../Image/anthropologie.PNG";
import ssence from "../Image/ssence.PNG";

export const Projects = () => {
  return (
    <div className={styles.projects} id={"projects"}>
      <div>
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
      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img
              className={styles.clonewebimg}
              src="data:image/jpeg;base64,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"
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
              <h1>Apple-Clone</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                This website is build to purchase the any category of apple
                products.
              </p>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                Easy to locate desired category and get details of product also
                can purchase the product of desired specifications.
              </p>
              <p className={styles.projectspecs}>
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                A collaborative project, built in 5 days by a team of 4
                developers.
              </p>
            </div>
            <div>
              <button className={styles.projectbutton}>Live Site</button>
              <button className={styles.projectbutton}>Github Repo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
