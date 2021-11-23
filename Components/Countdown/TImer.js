import { useState, useEffect } from "react";

import styles from "./Countdown.module.css";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

const TImer = () => {
  const [timerDays, setTimerDays] = useState(-1);
  const [timerHours, setTimerHours] = useState(-1);
  const [timerMinutes, setTimerMinutes] = useState(-1);
  const [timerSeconds, setTimerSeconds] = useState(-1);

  let interval;

  const startTimer = () => {
    const countDate = new Date("Dec 17, 2021 13:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      if (gap < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        const formatTime = (time) => {
          return time < 10 ? `0${time}` : time;
        };
        // Update Timer
        setTimerDays(textDay);
        setTimerHours(formatTime(textHour));
        setTimerMinutes(formatTime(textMinute));
        setTimerSeconds(formatTime(textSecond));
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className={styles.timer}>
        <Fade triggerOnce>
          <div className={styles.day}>
            <h1 className={styles.h1}>{timerDays < 0 ? "00" : timerDays}</h1>
            <p className={styles.p}>Day</p>
          </div>
        </Fade>
        <h1 className={styles.h1}>:</h1>
        <Fade delay={300} triggerOnce>
          <div className={styles.hour}>
            <h1 className={styles.h1}>{timerHours < 0 ? "00" : timerHours}</h1>
            <p className={styles.p}>Hour</p>
          </div>
        </Fade>
        <h1 className={styles.h1}>:</h1>
        <Fade delay={600} triggerOnce>
          <div className={styles.minute}>
            <h1 className={styles.h1}>
              {timerMinutes < 0 ? "00" : timerMinutes}
            </h1>
            <p className={styles.p}>Minute</p>
          </div>
        </Fade>
        <h1 className={styles.h1}>:</h1>
        <Fade delay={900} triggerOnce>
          <div className={styles.second}>
            <h1 className={styles.h1}>
              {timerSeconds < 0 ? "00" : timerSeconds}
            </h1>
            <p className={styles.p}>Second</p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default TImer;
