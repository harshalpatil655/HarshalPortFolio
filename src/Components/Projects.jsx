import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../CSS/Projects.module.css";
import timely from "../Image/timely.PNG";
import myntra from "../Image/myntra.PNG";
import bathandbody from "../Image/bathandbody.PNG";

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
      {/* ////////////////Myntra Clone/////////////////////// */}
      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img className={styles.clonewebimg} src={myntra} alt="myntra" />
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
                alt="Redux"
              />
              <p className={styles.projectp}>Redux</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="data:image/png;base64,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"
                alt="Chakra-UI"
              />
              <p className={styles.projectp}>Chakra-UI</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                alt="MongoDB"
              />
              <p className={styles.projectp}>MongoDB</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg"
                alt="Mongoose"
              />
              <p className={styles.projectp}>Mongoose</p>
            </div>
          </div>
        </div>
        <div className={styles.projectdetails}>
          <div>
            <div>
              <h1 className={styles.proname}>Myntra-Clone</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                Myntra is a one stop shop for all your fashion and lifestyle
                needs.
              </p>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                Complete user flow from selecting the desired product from the
                men's section and adding it to the cart to make payment &
                purchase..
              </p>
              <p className={styles.projectspecs}>
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                Login/ Signup using API and authentication & Sorting and
                searching functionalities.
              </p>
            </div>
            <div>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://myntra-frontend-seven.vercel.app/"
                >
                  Live Site
                </a>{" "}
              </button>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/harshalpatil655/Myntra_Clone"
                >
                  Github
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Bath and body//////////////////////////////////////////////// */}
      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img
              className={styles.clonewebimg}
              src={bathandbody}
              alt="bath&bodyworks"
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
                alt="Redux"
              />
              <p className={styles.projectp}>Redux</p>
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
              <h1>Bath & Body Works</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                This website is build for shopping the best home fragrance,
                gifts, body & bath products. I tried to reflect the
                functionalities of the original website
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
                  rel="noreferrer"
                  href="https://bathbodyworksclone.netlify.app/"
                >
                  Live Site
                </a>
              </button>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/harshalpatil655/beautiful-chicken-5218"
                >
                  Github
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////timely app//////////////// */}
      <div className={styles.projectflex}>
        <div className={styles.projectimage}>
          <div>
            <img
              className={styles.clonewebimg}
              src={timely}
              alt="timelyclone"
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADVCAMAAABjeOxDAAAAkFBMVEX///92Srx0R7tzRbtxQrpuPblsObhtO7hpNLdxQbpqNrdnMLZrOLj5+Pzz8Pm4ptqxndfh2u/u6vbq5fS0odi+rt339fvl3/HZ0Ou9rd3JvOOehM6KaMXEtuCCXMHMwOR7Ub6GYsPb0uyUdsmokdKPb8d+Vr+WecqhiM/Uyeh5T72mjtGsltSaf8yVeMqQccdq5yTBAAARUklEQVR4nN1d55rjqBJtIyGhYDnn7HEO4/d/u2t3GookQEjy3vPtr+2xRAkoKh4+PqpEd7xon/7Ol+vLejk/7lqrTrPS91eF4bm9ITGOfA+hxgvI8yIckMtpmtU9NrfotZYk9L+EZIB8TA79Xt0jdIWstY4joaC/AkfxYfD/sKDHj0Qt6be8mFy7dY+1IFbr1MuX9At+cv8vi7tqhBqT+g9echrWPWZLjNdmon7OLpnUPWwbZH9iY1FfwOtR3UM3xoRo71UGKGnXPXgzZJvQUtTPyV3+l8yMqfW0fsGLx3WLoI1ZnCfN01T0fsxGIZJW3ULoYXiIVJMWhTGJlo/j/e98HcdhJFkDwaxuOXQwCqVL2Mcxmk3GlOWQbScPIv4B3tcngy7OiUTSKI1OK6HiOc+IyKCMNlWP3RQLsaxegNod+a+aAyTQ3v6yunHbYEKEk5rMtnm/XPj8Tvffem6FsuKopeW9tRNuLUdvvG8XAlmxv9D9efeAuV+/rU5e8fvVj43Oyxv3tYI3PW87nKyI3A09tjNhl3LylrZUlzObfN98oD3uEIrf0U5usKMM/to8JmswJgY6uB5pcex9dv1ZeuHNCyNttHM70uJoMUYBItZ7bcg6CCT3kK4WrHJCYYFAcMZ+ON/dQF3AYyYjKBQmHDGfLrq6GqcLzJgNSwqGkVbMeZso7OqqMWbGRs5Fn3iFhvI7aWRmEWMHAbMlfGSobXOWjRucBs+F9d5lFkvo4Jku0GXViZMM1QCq5OhNwqt7aAS4OhU3zGPfIi+yhTaxM3uHWTDRzdFzC+EAVAlqOHtwG6oC8gb523NQyiJ+AQob9d092RZwYn2XkYUp1FH1K2RmYmOna+0CPiSu/azdwPEMnD4cfsnazagRUMUOtdMX1uBTpjVbyCfgAQQrx49fgV3rnxw/3gxNYNSVsM6gH0+cP98EA3A6BIWdnZwXYNcrxwjg3EFr9y+AS8d7uH+DNnpAPYXTEl5xBUqhTisKGnRRGa/opGAdl/E9NQHUR1ROogKcPt6xlHfoAH71pJzI/QSsnriUd+gArGLPKv6fjwyoqLC2EDJIeITuz50vAIO0toAFo4vLeg04alFdlQdgN/mlxbFhdrCuw2dOr6+gvM0EHL2wnnQtNG6C8l50o+2KmuIVZ9oj8UqsfYAvqqekpE1/8DJNdLiE0vJepABIUJAyawGAu5HW0UYAvne5EZMdvYZKO89V2NI7yS81gj2ly6NKMsHVAKdsuZ97RMfdylSFUhzpVExc7kaqbsdIANJOuNx30a+qIxA1pL92WR7PDx5gFVVfBNah91HZZg2IzQTVR48XtIYsO+rXTrBX2csEAAZrkFMc01xdNxGJ0b5t6S50p7Mw+K5qjNymWHTwh95Gar+rN0vwV5+wFwX2x2Snf/hsJSj3TBcC+F1KZXxNgOKOCkRcu4M5wVH1By04+hSl/D3Elf6nRUKE2WJTeeNARocPFEZNh6/7f05usdhK5UcPsODku2gkbAZ5864ODmdgm8sqi5ti/oLnL962z0EE4IhIkxJ3tuD6F/bVyDUA+DxY4vN0xIv4BbSeDiatJyaDxfQ87vTesRHgByAZIAvT7xVNtAhH38A4DIM0JsHhcW2tOm8o9VXDgGJrLfOAPD/CQRxvroPtW9Tu/WBGT1oqLpEfqNpoVUL7UUjQbPA2BdXAdU/FS+9PoVbwp2lJ9q23EBh6mOJFZzmxUOD4uKh9F4PUh1jYpuGWlQmMybJVL6cQFFbo9GS5Xf66eHEKTWqcXw1hh86E/ZSXzGurp9AQ9sPNMv4nL4539RCx7PP37IfUVrSGTzZ15AP2Gtr4WIyFRAgUouqjMjrnrK1RkSMuDqtOgEALSpwPyGSMFZ+I4jgm5PkfieM0CJ+mMtvPJ/9pWq24Orax0oTCk272vfqbWbczXg3as01IAiyjX4HihlVSZGl5PWyzJAWEhL9ojlb9IyJSwhnqY3nVhY9bWjm8k3TXKlsTh+PWIw1yBEbBsqqDaKEVqfiQkSBphGVGkz0JlacXIqdq6oRAUYc0BvXRFdO46ZLGnHdRqpLXL6Xql0NHL7r4MRJJaxJK7dz8QCFvMK/AZu7SBaneXfEP19y+jRX/XITtKcbSU8kjFXT76GYEPj5uCT0zCNtk4abLWDq9wb70GA5QleoizWz3Ii9DryBTFCPLA3J0IjLV7pVeQAM8gdzqyXP7sY78w7FImGXYDzlSoZ/3l0zboWVCucbAl4iLl6Uu5UF1lUE0FhJxvdBtaK4NfCt40FZomA9C8d5NHLp+zTkB5dPaZ497tMV0namzTr2R76EL+D90hIn5U9nIjhxF1ufGdVSdO33llCGfwNxIHTvGdi3auv7BxTB2Ma+GbvXWJrVEa9lDxY3Hx5cygibwCqSjqw8MZfOAlxbhgkWUzeW3+oMlkr36NNQ3FjE/uSgolDwY/uNUg5sWfNhSmg5zhzbnOUdRXEDaLsWWBzftX42sZdlo8cU4yH4oXZovHjYqwUqDmmgVRh7nDSFblrEu5Mb36L8B/72WTfuJPbeUUWSlkzPGaYYrBCSuSmxiykGbyymhhsV5O2TD1jDYBLICNVQB/4CnaPUsSujWrGqHPY4gwlgnzc2Iu4giMmYC2HB7PwI2MKiGKYPKQBsZYqcFGzZ9zjhXKmC0EGhHL3K+FUbzwEobG9l0k5T5eYOwKxXkQGppLvqHJUfVaqBEttyuT7iANGjwL6nfZjRt3W79aX7ch5M21I7UDLnTKxFkr8DzY/eBqNE1THHk+xFOw2ve49mVrK+S5+weIKJVAdt4Xffedx+Eer5P9mrLiKMKxprNBC3WNxaTn0KiCsfOwCBhpyqHMXnIVjfr8clxiVXZbgdZOrcxRtFlKexxwKDH/kTr86+ZTyTar5/oA1qOP6YCKXAXhkyx+hWsVvU1LPY+86JEmp3pAbvUYXt0W3K3EVbH/tnzMr9gneU+VZVrlEQPwrP0aw7/zlAFe8p//cEVgEeqeCzoFXDHQnKRpiglxRi/YHZg3vc/w23uqdtSIF2TIxd+qrigK4fpmC1fT9TnFfNVsdo3BM33rqgID4qKqLx3LGDQUa01ma8qVcTfgCoqdFKvM1LWs+axL7IMxKp/Dh32fMZtYGu5MZAnyjrAPI9jCDWyqixgASZWg5EIUnw6YSO8Kyugco9zKEIjletveINHzvbmf+FkalVbVkcxQP5W+dSCtGsD6/ioIDrjhEFUVk3wjVwetx48pWPZrgUfRTMTCcbmQiHn1NvnczdAskbZuoe6NdbrUG9Bis/iOa6cEvR83qAm/FySzQhOTW2yTqj+iptRG/We1VALfch+KT5SgGZNdENozKMLN+BflVOrRS6jQfBtSd7FrJpg0N5phY1kmCo1lJZNCreW0NMGxfBEPz8Ep7YRfYWN8M0yujpU1tvrOZJgawnpYEDXvgnngNhw9xPTy9O+oeob8eZaj4CctQlv4I/pMRsRgA8kC8+PrY5dRUu17hEBV4eg/JsOFhqaQtJ7c4mVujpKVZQ2Ox+wOQXLlHZ8DV3TlaCa4wuBTRFlU+rQaod+YOSTs7oA36xpZdNSejbGNh69bCEn+o4GJOJkFz998BhHCkfSqdXyJjgshG5eYvDhwOnD2RW0AjPnw5ZHUjT1J4SICQHJw5wCdJXF7vTzjaOibYXDralAaWx5ZwCFB7NzG7JgMn+kFqK5W6ryVCyi55wK8APPdO+DdcyUQdBt28YEU2elhZeY2haMcveIfzIPgYByHuZ0of9m3KFxUtruxnE4+DTvaFdtSh8+DNk0bX4bV4mx2SEI01QBowC03S8GdJcnglqSXuKJ6XPV/e2GvIxM/sW6oAx2R4I/UY67celLDnOBusuJA5MJtzqnXwAeK6wypVwNY/WZw0lhxhHPxPTtb+kB+Vq4M6k6eOPn57CNIBOzgl0lBW7/o0cFmdupo803zj2qZ9aIppdNIhYonaOfBA8YSqGa1zSpY2Qmz2PusMzPsGqOKgIHreXgvqCyFo0uGeixmfAiQXf67IEyIdkfdNBRrmOD6CqTMLVyIn5BO/BwO1A5G4t9Is+VGxmfLJ+f9bHziRMtLNBDVDrJgntVlSzXv8lnwnjFBe8onkmFpXazDcm53GDUj5qzpT1F297uUmEplW90Ln5DysChn+riTJOil4DvpQqKnnMbQvWBREcRXTO+2WAWR+FECp3ohU1ldCDVymppC6XNK8r4hyUTiSlenE4PCAaa6F5nu6usJnxLkUHH8p49qm09u18AwxNynNI+gmUjYQfBgAVK9WkV7qysxYmBQKgCxmXoYKj1xQATHP4sRuSnB/1YyoyN6zi4mAf05cPrB4DnYn//3OqO4yAMUnK5GejSGXtMI7944y/IgDAS0cqw0JVZ2Wi7HRmN9c5X6TtoiqIXCxs/oD9Etfz1f7nYpFmnihgdRcANLvGSry4BmHMukxMa77aqDRQor+p4NoYHLgybUwmrCXBsp2zVA7iopap7bXs+l9VByAUrwRg4FVw90cOypKIIzgLKCTdXHT3U2Wiwaau5ersviNS5UMRs/RqflYRV2CXdJwvwEHjBBvlmFWBpq8DYB+WgfukXG4yQIENE3HDQwbspRNEdWNVc2BDPwUB0LwhxRO8Bw52iRB1kNzVMWhiiuRcVJhBHtKArWE8prO0EGqwRlMhqeA5FhV2uZGXI38VRAFgD30jLIgtr3oWOvqs1/DGDykCia2FkpKz7T1dYmLvm25EtwbQmyW49hjXwjVJ4k7MH12H+JasrCzVjO/JkC5QNUru/HVnI5PSKajhjumAaKuSdDszUOicpGF8k9HrImXl6ZJoPFcFnJo9hSdQiQfchpsVtRBtnxGg3xipTWZ9jRk8i35m0zR3b2f27ftwZ4n1m/OrOd7b8FYWOaApaMnJXZFKSmANW1hxOgyZn2RAX7YQDLEvh+sgd6cOOVfQS2v9fnDm3qzjxqpTl9GmnOWyV/8t6UfmnyZWPCRnWSEI0W1gqKnJIxtxds/tEp9aZzbq8tpV1uHF0lTITv+hr3QVEFlzQI9BJ7zYFlzVEdn1n0w2RlzWixJ2FJuBhDPV4krqB4DjEvqm445mCTfw5GNm03g/GVrKALTbUPc96wsM/iq/aNl3zfAqEbtwPfOmGmkcIBzsT63Ei4AFO9fmveqn4BoC40dYYxbY1J0pJn4pJ1uCUXT7XvZ9qvemJ7i0VKAWOvUr5CMl1FCgK4j8T+S19o+ltQ4JIWQT2ustCJsj29ys/34RPq5xzMluIlYKhuzg8SJWoF4Ux3p9a03On182Gw2HW7XXO09bugUiAZVeT/gNGUjNlAkszfEwap0VHbDgPx/0lESoFDxu7UEd5+0rj82JCHAZpGr+Qfl65wwf3haIqUt13/pXIxwFp/LkNnl82+5R6mI3G0/69QULJAsIbixCLMP5XDAhjeZwp46+T+IHnR6/rPV+XGZGvy4ykdxmhxK56qndxe3UUCj3F8XWW+H9miBrWUYC2w8n10oPKpdi5uFuugKn3RG8jPoSMRxElR5VVni1zGBu0XhJsCkZWzg2OntMYfoBaaqWxWguIqA2h0PL6WHiFxPXC+KQRuNv+SYpoCKTS8kaYrlPL7+6F5Kj7vbN2pLa7FKKGDYd80ttjkmMWCUbwtLZmK6NQ2vlIsLm8EZk7LosYDpZE69a6L0Gfxs+hbRF2bk4fOXY1Az/w22UkHLuDudRsofA0J8lll2fWytFcnXCq9V29KI127gP5vwM5tzcvA1jiJjzlTNNH/1w4JTYaHF9EqXKJn68Kknmr/KuCOtPb0+b/uoIy8n3/dV17GKYkXc5aZ3eBlt6qvY9IED6Nbu+HLwF93pD+fNf6VOl94a8rKBeTVr/fb00Wq3OnW8p1J83RedHf3R+bw6VxuRw2j/uuNR3bbdL/Af+B7Uhx3MLOAAAAAElFTkSuQmCC"
                alt="Redux"
              />
              <p className={styles.projectp}>Redux</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="data:image/png;base64,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"
                alt="Chakra-UI"
              />
              <p className={styles.projectp}>Chakra-UI</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                alt="MongoDB"
              />
              <p className={styles.projectp}>MongoDB</p>
            </div>
            <div>
              <img
                className={styles.projectimageslogo}
                src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg"
                alt="Mongoose"
              />
              <p className={styles.projectp}>Mongoose</p>
            </div>
          </div>
        </div>
        <div className={styles.projectdetails}>
          <div>
            <div>
              <h1 className={styles.proname}>Timely-Clone</h1>
            </div>
            <div>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                This website is build to a precise daily record of all the time
                you spend in documents, meetings, emails, websites and video
                calls with zero effort.
              </p>
              <p className={styles.projectspecs}>
                {" "}
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                You can track projects and also do effortless appointment
                scheduling.
              </p>
              <p className={styles.projectspecs}>
                <span style={{ fontSize: "23px", fontWeight: "800" }}>
                  {">"}
                </span>{" "}
                A group project, build in 5 days.
              </p>
            </div>
            <div>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://app-timely-clone.netlify.app/"
                >
                  Live Site
                </a>{" "}
              </button>
              <button className={styles.projectbutton}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mohammad-atique/timely-clone"
                >
                  Github
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////github calender///////////////// */}
      {/* //////////////////////////////////////////// */}
      <div>
        <div className={styles.gitcal}>
          <h1 className={styles.statsh1}>Github Calender</h1>
          <div className={styles.gitcalone}>
            <GitHubCalendar username="harshalpatil655" />
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////
      /////////github Stats//////////////////
      /////////////////////////////////////// */}
      <h1 className={styles.statsh1}>Github Stats</h1>
      <div className={styles.statsmain}>
        <p>
          <img
            className={styles.streak}
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=harshalpatil655&"
            alt="harshalpatil655"
          />
        </p>

        <p>
          &nbsp;
          <img
            className={styles.stats}
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=harshalpatil655&show_icons=true&locale=en"
            alt="harshalpatil655"
          />
        </p>

        <p>
          <img
            className={styles.language}
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=harshalpatil655&show_icons=true&locale=en&layout=compact"
            alt="harshalpatil655"
          />
        </p>
      </div>
    </div>
  );
};
