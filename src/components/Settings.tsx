import Timer from "./Timer";
import { useState } from "react";
import ShowTimer from "./ShowTimer";

const Settings = () => {
  const [isShown, setIsShown] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);
  const [inputSeconds, setInputSeconds] = useState(0);

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
          show={showTimer}
        />
        <button
          className="start-button"
          onClick={() => {
            let startButton = document.querySelector(".start-button");
            startButton?.classList.toggle("shadow");
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
                setInputMinutes(5);
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
    </section>
  );
};
export default Settings;
