import Heading from "./components/Heading";
import Content from "./components/Content";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <>
      <main>
        <DarkMode />

        <h1>Pomodoro Timer</h1>
        <Content />
        {/* <audio controls src="src/assets/alarm.wav" autoPlay muted loop></audio> */}
      </main>
    </>
  );
}

export default App;
