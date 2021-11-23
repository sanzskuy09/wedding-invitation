import Image from "next/image";

import styles from "./Profile.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Profile = () => {
  return (
    <>
      <div className={styles.section}>
        <Zoom triggerOnce>
          <div className={styles.card}>
            <Fade delay={500} cascade triggerOnce>
              <div className={styles.image}>
                <Image src="/Assets/pria.png" layout="fill" />
              </div>
              <h2 className={styles.h2}>Musyaffa Nur Ihsanuddin</h2>
              <p className={styles.p}>
                Putra Pertama dari Bapak Susanto Wahyono & Ibu Rohanah
              </p>
              <a
                href="https://www.instagram.com/mn_sanz/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Assets/instagram.svg" alt="instagram" />
              </a>
            </Fade>
          </div>
        </Zoom>

        <Zoom triggerOnce>
          <div className={styles.card}>
            <Fade delay={500} cascade triggerOnce>
              <div className={styles.image}>
                <Image src="/Assets/wanita.png" layout="fill" />
              </div>
              <h2 className={styles.h2}>Nur Mila Dianti</h2>
              <p className={styles.p}>
                Putra Pertama dari Bapak Dwi Tono & Ibu Nur Laila
              </p>
              <a rel="noopener noreferrer" style={{ cursor: "no-drop" }}>
                <img src="/Assets/instagram.svg" alt="instagram" />
              </a>
            </Fade>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Profile;
