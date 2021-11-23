import styles from "./Header.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Header = () => {
  return (
    <>
      <div className={styles["hero-image"]}>
        <div className={styles["hero-text"]}>
          <Zoom cascade triggerOnce>
            <h3 className={styles.h3}>WE ARE GETTING MARRIED</h3>
            <h1 className={styles.h1}>Ihsan & Mila</h1>
            <h3 className={styles.h3}>December, 18th 2021</h3>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Header;
