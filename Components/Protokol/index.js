import styles from "./Protokol.module.css";

import Image from "next/image";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Protokol = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={styles["section-image"]}>
        <div className={styles["section-text"]}>
          <Zoom triggerOnce>
            <h1 className={styles.h1}>Protokol Kesehatan</h1>
          </Zoom>
          <div className={styles["image-wrapper"]}>
            {data.map((e, index) => (
              <Zoom cascade delay={500} triggerOnce>
                <div className={styles.wrapper}>
                  <Image
                    src={`/Assets/P${index + 1}.svg`}
                    width={135}
                    height={140}
                  />
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Protokol;
