import Heading from "./components/Heading";
import Timer from "./components/Timer";

function App() {
  let inputMinutes: number = 30;
  let inputSeconds: number = 0;
  return (
    <>
      <Heading title={""} />
      <Timer inputMinutes={inputMinutes} inputSeconds={inputSeconds} />
    </>
  );
}

export default App;
