import React from "react";

const Settings = () => {
  return (
    <>
      <section className="settings">
        <section className="settings-inputs">
          <input type="number" placeholder="25" className="minutes" />
          <input type="number" placeholder="00" className="seconds" />
        </section>
        <button>START</button>
      </section>
    </>
  );
};

export default Settings;