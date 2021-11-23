import styles from "./Countdown.module.css";
import Timer from "./TImer";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Countdown = () => {
  return (
    <>
      <div className={styles["section-image"]}>
        <div className={styles["section-text"]}>
          <Zoom triggerOnce>
            <h4 className={styles.h4}>Counting down to the big day</h4>
          </Zoom>
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Countdown;
