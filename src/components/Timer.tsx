import { useEffect, useState } from "react";

type dataTypes = {
  inputMinutes: number;
  inputSeconds: number;
  inputBreakMinutes: number;
  inputBreakSeconds: number;
  show: boolean;
};

const Timer = ({
  inputMinutes,
  inputSeconds,
  inputBreakMinutes,
  inputBreakSeconds,
  show,
}: dataTypes) => {
  const date: Date = new Date(0);
  let startingMinutes: number = date.getMinutes() + inputMinutes;
  let startingSeconds: number = date.getSeconds() + inputSeconds;

  let breakStartingMinutes: number = date.getMinutes() + inputBreakMinutes;
  let breakStartingSeconds: number = date.getSeconds() + inputBreakSeconds;

  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(startingSeconds);
  const [breakMinutes, setBreakMinutes] = useState(breakStartingMinutes);
  const [breakSeconds, setBreakSeconds] = useState(breakStartingSeconds);
  const [isBreak, setIsBreak] = useState(false);

  const audioElement: HTMLAudioElement | null = document.querySelector("audio");
  if (audioElement != null) {
    audioElement.play();
  }

  function play() {
    if (audioElement != null) audioElement.muted = false;
  }

  function pause() {
    if (audioElement != null) audioElement.muted = true;
  }

  const start: number = Date.now();

  function timer(minutes: number, seconds: number, isBreak: boolean) {
    if (!isBreak) {
      const millis: number = Date.now() - start;
      let checkTimer = Math.floor(millis / 1000);

      setIsBreak(false);
      setSeconds((seconds) => (seconds -= checkTimer));
      if (seconds === 0) {
        setSeconds((seconds) => seconds + 59);
        setMinutes((minutes) => minutes - 1);
      }
      if (seconds === 0 && minutes === 0) {
        setIsBreak(true);
        play();
        setTimeout(pause, 8000);
        setBreakMinutes(breakStartingMinutes);
        setBreakSeconds(breakStartingSeconds);
      }
    } else if (isBreak) {
      setIsBreak(true);
      setBreakSeconds(breakSeconds - 1);
      if (breakSeconds === 0) {
        setBreakSeconds(breakSeconds + 59);
        setBreakMinutes(breakMinutes - 1);
      }
      if (breakSeconds === 0 && breakMinutes === 0) {
        setIsBreak(false);
        play();
        setTimeout(pause, 8000);
        setMinutes(startingMinutes);
        setSeconds(startingSeconds);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      timer(minutes, seconds, isBreak);
    }, 1000);
  }, [show, start]);

  let result: string;
  result = "00:00";
  if (!isBreak) {
    if (show) {
      result = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
    } else {
      result = "00:00";
    }
  } else if (isBreak) {
    if (show) {
      result = `${("0" + breakMinutes).slice(-2)}:${("0" + breakSeconds).slice(
        -2
      )}`;
    } else {
      result = "00:00";
    }
  }

  return (
    <>
      <div className="timer-wrapper">
        <section className="timer">{result}</section>
        <span className="wave1"></span>
        <span className="wave2"></span>
      </div>
    </>
  );
};

export default Timer;
