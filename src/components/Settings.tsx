import Timer from "./Timer";
import { useState } from "react";

const Settings = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);
  const [inputSeconds, setInputSeconds] = useState(0);

  return (
    <>
      <section className="settings">
        <section className="settings-inputs">
          <input type="number" placeholder="25" className="minutes" />:
          <input type="number" placeholder="00" className="seconds" />
        </section>
        <button
          className="start-button"
          onClick={() => {
            setInputMinutes(25);
            setInputSeconds(0);
            setShowTimer(true);
          }}
        >
          START
        </button>
      </section>
      <Timer
        inputMinutes={inputMinutes}
        inputSeconds={inputSeconds}
        show={showTimer}
      />
    </>
  );
};

export default Settings;
