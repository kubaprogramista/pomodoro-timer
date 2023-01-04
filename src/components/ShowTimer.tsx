import Timer from "./Timer";

type dataTypes = { inputMinutes: number; inputSeconds: number; show: boolean };

const ShowTimer = ({ inputMinutes, inputSeconds, show }: dataTypes) => {
  if (show) {
    return (
      <>
        <Timer
          inputMinutes={inputMinutes}
          inputSeconds={inputSeconds}
          show={show}
        />
      </>
    );
  } else {
    return <section className="timer">00:00</section>;
  }
};

export default ShowTimer;
