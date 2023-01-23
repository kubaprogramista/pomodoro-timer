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

  // function timer(minutes: number, seconds: number) {
  //   seconds -= 1;
  //   if (seconds === 0) {
  //     minutes -= 1;
  //     seconds = 60;
  //   } else if (seconds === 0 && minutes === 0) {
  //     timer(breakMinutes, breakSeconds);
  //   }
  //   console.log(seconds);

  //   return [minutes, seconds];
  // }
  // console.log(timer(minutes, seconds));

  function timer(minutes: number, seconds: number, isBreak: boolean) {
    if (!isBreak) {
      setTimeout(() => {
        setIsBreak(false);
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setSeconds(seconds + 59);
          setMinutes(minutes - 1);
        }
        if (seconds === 0 && minutes === 0) {
          setIsBreak(true);
          play();
          setTimeout(pause, 8000);
          setBreakMinutes(breakStartingMinutes);
          setBreakSeconds(breakStartingSeconds);
        }
      }, 1000);
    } else if (isBreak) {
      setTimeout(() => {
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
      }, 1000);
    }
  }

  useEffect(() => {
    timer(minutes, seconds, isBreak);
  }, [seconds, breakSeconds]);

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
