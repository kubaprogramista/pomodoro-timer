import Timer from "./Timer";
import { useState } from "react";
import ShowTimer from "./ShowTimer";

const Settings = () => {
  const [isShown, setIsShown] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);
  const [inputSeconds, setInputSeconds] = useState(0);

  return (
    <>
      <section className="settings">
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
        <button
          className="start-button"
          onClick={() => {
            setIsShown(!isShown);
            setShowTimer(isShown);
          }}
        >
          START
        </button>
      </section>
      <ShowTimer
        inputMinutes={inputMinutes}
        inputSeconds={inputSeconds}
        show={showTimer}
      />
    </>
  );
};
export default Settings;
