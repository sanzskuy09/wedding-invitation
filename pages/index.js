import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import styleModal from "../styles/Modal.module.css";

import Header from "../Components/Header";
import Opening from "../Components/Opening";
import Words from "../Components/Words";
import Profile from "../Components/Profile";
import Schedule from "../Components/Schedule";
import Countdown from "../Components/Countdown";
import RSVP from "../Components/RSVP";
import Protokol from "../Components/Protokol";
import Guessbook from "../Components/Guessbook";
import Closing from "../Components/Closing";
import Footer from "../Components/Footer";

import { useState } from "react";

import { Modal } from "react-bootstrap";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

import ReactAudioPlayer from "react-audio-player";

export default function Home({ url }) {
  const router = useRouter();
  const { u } = router.query;
  console.log("url", u);

  const values = true;
  const [play, setPlay] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);

  function handleShowOff() {
    setPlay(true);
    setFullscreen(false);
    setShow(false);
  }

  console.log("play", play);

  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Body className={styleModal["container-modal"]}>
          <div className={styleModal["text-modal"]}>
            <Fade cascade>
              <h3 className={styleModal.h3}>Dear {u}</h3>
              <h2 className={styleModal.h2}>You Are Invited!</h2>
              <h3 className={styleModal.h3}>The Weeding Celebration of</h3>
              <h1 className={styleModal.h1}>Ihsan & Mila</h1>
              <a href="#" style={{ textDecoration: "none" }}>
                <button
                  className={styleModal.button}
                  onClick={() => handleShowOff(values)}
                >
                  <Image src="/Assets/pink-heart.svg" width={20} height={20} />{" "}
                  <span style={{ marginLeft: "5px" }}>Open Invitation</span>
                </button>
              </a>
            </Fade>
          </div>
        </Modal.Body>
      </Modal>

      <main>
        {play ? (
          <div>
            <ReactAudioPlayer
              src="/Assets/song.mp3"
              autoPlay="true"
              loop={true}
              volume={0.3}
            />
          </div>
        ) : (
          ""
        )}

        <Header />
        <Opening />
        <Words />
        <Profile />
        <Schedule />
        <Countdown />
        <RSVP />
        <Protokol />
        <Guessbook />
        <Closing />
        <Footer />
      </main>
    </div>
  );
}
