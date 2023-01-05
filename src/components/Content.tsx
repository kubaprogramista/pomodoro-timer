import Timer from "./Timer";
import { useState } from "react";
import ShowTimer from "./ShowTimer";

const Settings = () => {
  const [isShown, setIsShown] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [inputBreakMinutes, setInputBreakMinutes] = useState(5);
  const [inputBreakSeconds, setInputBreakSeconds] = useState(0);

  return (
    <section className="main-content">
      <section className="settings">
        <p className="setting-info">Session</p>
        <section className="settings-inputs">
          <input
            type="number"
            placeholder="25"
            className="minutes"
            onChange={(e) => {
              let minutesValue: number = +e.target.value;
              if (minutesValue === null) {
                setInputMinutes(25);
              } else {
                setInputMinutes(minutesValue);
              }
            }}
          />
          :
          <input
            type="number"
            placeholder="00"
            className="seconds"
            onChange={(e) => {
              let secondsValue: number = +e.target.value;
              if (secondsValue === null) {
                setInputSeconds(0);
              } else {
                setInputSeconds(secondsValue);
              }
            }}
          />
        </section>
      </section>
      <section className="main-center">
        <ShowTimer
          inputMinutes={inputMinutes}
          inputSeconds={inputSeconds}
          inputBreakMinutes={inputBreakMinutes}
          inputBreakSeconds={inputBreakSeconds}
          show={showTimer}
        />
        <button
          className="start-button"
          onClick={() => {
            const startButton: any = document.querySelector(".start-button");
            const wave1: any = document.querySelector(".wave1");
            const wave2: any = document.querySelector(".wave2");
            wave1.classList.toggle("active");
            wave2.classList.toggle("active");
            startButton?.classList.toggle("shadow");
            if (startButton.classList.length > 1) {
              startButton.innerHTML = `<i class="fa fa-pause"></i>`;
              startButton.style.transition = "all 0.15s ease-in-out";
              startButton.style.fontSize = "2.6rem";
            } else {
              startButton.innerHTML = `<i class="fa fa-play"></i>`;
              startButton.style.transition = "all 0.15s ease-in-out";
              startButton.style.fontSize = "3rem";
            }
            setIsShown(!isShown);
            setShowTimer(isShown);
          }}
        >
          <i className="fa fa-play"></i>
        </button>
      </section>
      <section className="settings">
        <p className="setting-info">Break</p>
        <section className="settings-inputs">
          <input
            type="number"
            placeholder="05"
            className="minutes"
            onChange={(e) => {
              let minutesValue: number = +e.target.value;
              if (minutesValue === null) {
                setInputBreakMinutes(5);
              } else {
                setInputBreakMinutes(minutesValue);
              }
            }}
          />
          :
          <input
            type="number"
            placeholder="00"
            className="seconds"
            onChange={(e) => {
              let secondsValue: number = +e.target.value;

              if (secondsValue === null) {
                setInputBreakSeconds(0);
              } else {
                setInputBreakSeconds(secondsValue);
              }
            }}
          />
        </section>
      </section>
    </section>
  );
};
export default Settings;
