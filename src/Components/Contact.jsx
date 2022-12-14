import React, { useContext } from "react";
import styles from "../CSS/Contact.module.css";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TheameContext } from "../Context/TheameContext";

const Contact = () => {
  const { isLight } = useContext(TheameContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1f5sul",
        "template_p0iffee",
        form.current,
        "p9NDcuQ6uxdIHulA-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your have successfully send message, Thank You.");
  };
  // className={styles.contact}

  return (
    <div className={`${isLight ? styles.light : styles.dark}`} id={"contact"}>
      <div className={styles.contacttitle}>
        <h1 style={{ textDecoration: "underline" }}>Contact Me</h1>
        <h3>Get In Touch</h3>
        <p className={styles.contactp}>
          Thanks for stopping by, I'm currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another give me call or send me email.
        </p>
      </div>
      <div className={styles.contactdivs}>
        <div className={styles.contone}>
          <div
            className={`${
              isLight ? styles.contactdivslight : styles.contactlogodivsdark
            }`}
          >
            <div>
              <h2 className={styles.contactname}>Harshal Hemant Patil</h2>
            </div>
            <div>
              <div className={styles.contdiv}>
                <div className={styles.contacthover}>
                  {" "}
                  <AiTwotoneMail size={25} />
                </div>
                <div>harshalpatil655@gmail.com</div>
              </div>
              <div className={styles.contdiv}>
                <div className={styles.contacthover}>
                  <BsFillTelephoneForwardFill size={25} />
                </div>
                <div>+91 7709993272</div>
              </div>
              <div className={styles.contlog}>
                <div className={styles.contacthover}>
                  <a
                    href="https://www.linkedin.com/in/harshalpatil655"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <AiFillLinkedin size={30} />
                  </a>

                  <p>Linkedin</p>
                </div>
                <div className={styles.contacthover}>
                  <a
                    href="https://github.com/harshalpatil655"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <AiFillGithub size={30} />
                  </a>

                  <p>Github</p>
                </div>
                <div className={styles.contacthover}>
                  <a
                    href="https://twitter.com/harshalpatil655"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterSquare color="#018ec4" size={30} />
                  </a>

                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className={styles.contactemaildiv}>
          <div>
            <form
              className={styles.contactmail}
              ref={form}
              onSubmit={sendEmail}
            >
              <label className={styles.formlabel}>Enter Name</label>
              <input
                className={styles.forminput}
                type="text"
                name="user_name"
              />
              <label className={styles.formlabel}>Enter Email</label>
              <input
                className={styles.forminput}
                type="email"
                name="user_email"
              />
              <label className={styles.formlabel}>Message</label>
              <textarea className={styles.forminput} name="message" />
              <input
                className={styles.formbtn}
                type="submit"
                value="Send Email "
              />
            </form>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <div className={`${isLight ? styles.build : styles.builddark} `}>
        ?? 2022 Design and Build by Harshal Patil
      </div>
    </div>
  );
};

export default Contact;
