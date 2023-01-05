import Timer from "./Timer";

type dataTypes = {
  inputMinutes: number;
  inputSeconds: number;
  inputBreakMinutes: number;
  inputBreakSeconds: number;
  show: boolean;
};

const ShowTimer = ({
  inputMinutes,
  inputSeconds,
  inputBreakMinutes,
  inputBreakSeconds,
  show,
}: dataTypes) => {
  if (show) {
    return (
      <>
        <Timer
          inputMinutes={inputMinutes}
          inputSeconds={inputSeconds}
          inputBreakMinutes={inputBreakMinutes}
          inputBreakSeconds={inputBreakSeconds}
          show={show}
        />
      </>
    );
  } else {
    return (
      <div className="timer-wrapper">
        <section className="timer">00:00</section>
        <span className="wave1 active"></span>
        <span className="wave2 active"></span>
      </div>
    );
  }
};

export default ShowTimer;
