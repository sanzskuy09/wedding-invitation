import styles from "./Words.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Words = () => {
  return (
    <>
      <div className={styles.section}>
        <Zoom triggerOnce>
          <h3 className={styles.h3}>We Found Love</h3>
        </Zoom>
        {/* Image 1 */}
        <div className={styles["image-galery"]}>
          <div className={styles.image1}></div>
          <div className={styles["text-galery"]}>
            <Slide cascade triggerOnce>
              <p className={styles.p}>
                “Hakikat pernikahan adalah menggenapkan yang belum genap dan
                menyempurnakan yang kurang sempurna.”
              </p>
              <h5 className={styles.h5}>( Merry Maeta Sari )</h5>
            </Slide>
          </div>
        </div>

        {/* Image 2 */}
        <div className={styles["image-galery"]}>
          <div className={styles.image2}></div>
          <div className={styles["text-galery"]}>
            <Slide cascade triggerOnce>
              <p className={styles.p}>
                “Tiada janji terindah yang didengar oleh wanita dari lisan
                laki-laki, kecuali janji akad pernikahan.”
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Words;
