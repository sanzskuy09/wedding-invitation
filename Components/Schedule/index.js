import styles from "./Schedule.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Schedule = () => {
  return (
    <>
      <div className={styles["section-image"]}>
        <div className={styles.section}>
          <div className={styles.card}>
            <Slide triggerOnce>
              <h1 className={styles.h1}>Akad Nikah</h1>
              <div className={styles.hr}></div>
              <div className={styles.text}>
                <p>Jumat, 17 December 2021</p>
                <p>13.30 WIB s/d selesai</p>
                <p>
                  Masjid Baiturrahim JL. Taufiqurrahman, Rt. 002/ 01, Beji
                  Timur, Depok, Jawa Barat
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Masjid+Baiturrahim/@-6.3744843,106.8215008,20.25z/data=!4m5!3m4!1s0x2e69ec015ce0eb6d:0xf4245e34be27b75f!8m2!3d-6.3746342!4d106.8215559"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button className={styles.button}>
                  <img
                    src="/Assets/map.svg"
                    alt="map"
                    style={{ marginRight: "5px" }}
                  />
                  View Location
                </button>
              </a>
            </Slide>
          </div>

          <div className={styles.card}>
            <Slide triggerOnce>
              <h1 className={styles.h1}>Resepsi</h1>
              <div className={styles.hr}></div>
              <div className={styles.text}>
                <p>Sabtu, 18 December 2021</p>
                <p>
                  Sesi 1 : 08.00 s/d 10.00 WIB <br />
                  Sesi 2 : 10.00 s/d 12.00 WIB <br />
                  Sesi 3 : 12.00 s/d 15.00 WIB
                </p>
                <p>
                  JL. Garuda Raya, Rt. 002 No.105, Beji Timur, Depok, Jawa Barat
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Jl.+Garuda+6+No.105,+Beji+Tim.,+Kecamatan+Beji,+Kota+Depok,+Jawa+Barat+16425/@-6.3740972,106.8205925,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x2e69ec015ce0eb6d:0xf4245e34be27b75f!2sMasjid+Baiturrahim!8m2!3d-6.3746342!4d106.8215559!3m4!1s0x2e69ec03b21c5ce5:0x67b07605e7e06007!8m2!3d-6.3740985!4d106.8211397"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button className={styles.button}>
                  {" "}
                  <img
                    src="/Assets/map.svg"
                    alt="map"
                    style={{ marginRight: "5px" }}
                  />
                  View Location
                </button>
              </a>
            </Slide>
          </div>

          <Slide delay={500} triggerOnce>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Turut Mengundang: <br />
              – Keluarga Besar M. Kamil Bendarasin <br />
              – Keluarga Besar Drs. Tri Jaka S.A & istri <br />
              – Keluarga Besar Suharli & Istri <br />– Keluarga Besar Suazi
              Ilyas & Istri
            </p>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Schedule;
