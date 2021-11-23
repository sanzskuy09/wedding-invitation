import styles from "./Footer.module.css";

import { Fade, Slide, Zoom, Flip, Bounce } from "react-awesome-reveal";

const Footer = () => {
  return (
    <>
      <div className={styles.section}>
        <Bounce cascade triggerOnce>
          <h5 className={styles.h5}>Made By. YukNganten</h5>
          <a
            href="https://www.instagram.com/mn_sanz/?hl=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Assets/instagram.svg" alt="instagram" />
          </a>
        </Bounce>
      </div>
    </>
  );
};

export default Footer;
