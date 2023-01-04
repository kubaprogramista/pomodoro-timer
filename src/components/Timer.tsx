import { useEffect, useState } from "react";

type inputs = { inputMinutes: number; inputSeconds: number };

const Timer = ({ inputMinutes, inputSeconds }: inputs) => {
  const date: Date = new Date(0);
  let startingMinutes: number = date.getMinutes() + inputMinutes;
  let startingSeconds: number = date.getSeconds() + inputSeconds;

  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(startingSeconds);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) return;

    const countdown = setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setSeconds(seconds + 59);
        setMinutes(minutes - 1);
      }
    }, 1000);
  }, [seconds]);

  let result: string = `${minutes}:${seconds}`;

  // if (`${seconds}`.length === 1) {
  //   result = `${minutes}:0${seconds}`;
  // } else if (`${minutes}`.length === 1) {
  //   result = `0${minutes}:${seconds}`;
  // } else if (`${seconds}`.length === 1 && `${minutes}`.length === 1) {
  //   result = `0${minutes}:0${seconds}`;
  // }

  result = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;

  return (
    <>
      <section className="timer">{result}</section>
    </>
  );
};

export default Timer;
