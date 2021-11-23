import styles from "./Opening.module.css";

import Image from "next/image";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Opening = () => {
  return (
    <>
      <div className={styles["section-image"]}>
        <div className={styles["section-text"]}>
          <Slide triggerOnce>
            <h5 className={styles.h5}>Assalamualaikum Wr. Wb</h5>
            <Image src="/Assets/Icon.svg" width={66} height={81} />
            <p className={styles.text}>
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya dan Dia menjadikan di
              antara kamu rasa kasih dan sayang. Sungguh, pada demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berfikir.“
            </p>
            <h4 className={styles.h4}>( QS. Ar- Rum 21 )</h4>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Opening;
