import styles from "./Closing.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Closing = () => {
  return (
    <>
      <div className={styles["section-image"]}>
        <div className={styles["section-text"]}>
          <Zoom cascade triggerOnce>
            <h4 className={styles.h4}>Thank You</h4>
            <h1 className={styles.h1}>Ihsan & Mila</h1>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Closing;
