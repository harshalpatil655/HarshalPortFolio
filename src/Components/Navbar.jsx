import React, { useContext } from "react";
import Link from "react-scroll/modules/components/Link";
import { TheameContext } from "../Context/TheameContext";
import styles from "../CSS/Navbar.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GrCentos } from "react-icons/gr";

const Navbar = () => {
  const { isLight, toggleTheame } = useContext(TheameContext);
  return (
    <div className={styles.navmain}>
      <div className={styles.navflex}>
        <div className={styles.logodiv}>
          {" "}
          <GrCentos /> Harshal
        </div>
        <div className={styles.linkstab}>
          <div>
            <Link
              className={styles.tabs}
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              className={styles.tabs}
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className={styles.tabs}
              to="skills"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              Skills
            </Link>
          </div>

          <div>
            <Link
              className={styles.tabs}
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              className={styles.tabs}
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              Contact
            </Link>
          </div>
          <div className={styles.tabs}>
            {/* <button onClick={toggleTheame}>{`${
            isLight ? "Dark" : "Light"
          }`}</button> */}
            <div onClick={toggleTheame}>
              {isLight ? (
                <BsFillSunFill size={20} />
              ) : (
                <BsFillMoonFill size={20} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
