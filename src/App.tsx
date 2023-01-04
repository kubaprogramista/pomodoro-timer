import Heading from "./components/Heading";
import Settings from "./components/Settings";

function App() {
  let inputMinutes: number = 25;
  let inputSeconds: number = 0;
  return (
    <>
      <main>
        <Heading title={"Pomodoro Timer"} />
        <Settings />
      </main>
    </>
  );
}

export default App;
