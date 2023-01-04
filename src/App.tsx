import Heading from "./components/Heading";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  let inputMinutes: number = 25;
  let inputSeconds: number = 0;
  return (
    <>
      <Heading title={"Pomodoro Timer"} />
      <Settings />
      <Timer inputMinutes={inputMinutes} inputSeconds={inputSeconds} />
    </>
  );
}

export default App;
