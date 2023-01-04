import { useEffect, useState } from "react";

type dataTypes = { inputMinutes: number; inputSeconds: number; show: boolean };

const Timer = ({ inputMinutes, inputSeconds, show }: dataTypes) => {
  const date: Date = new Date(0);
  let startingMinutes: number = date.getMinutes() + inputMinutes;
  let startingSeconds: number = date.getSeconds() + inputSeconds;

  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(startingSeconds);

  useEffect(() => {
    if (show) {
      if (seconds === 0 && minutes === 0) return;

      const countdown = setTimeout(() => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setSeconds(seconds + 59);
          setMinutes(minutes - 1);
        }
      }, 1000);
    }
  }, [seconds]);

  let result: string;

  if (show) {
    result = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  } else {
    result = "00:00";
  }

  return (
    <>
      <section className="timer">{result}</section>
    </>
  );
};

export default Timer;
