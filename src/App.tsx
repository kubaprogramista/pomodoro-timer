import Heading from "./components/Heading";
import Content from "./components/Content";
import AudioHandler from "./components/AudioHandler";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <>
      <main>
        <DarkMode />
        <Heading title={"Pomodoro Timer"} />
        <Content />
      </main>
      <audio controls src="src/assets/alarm.wav" autoPlay muted loop></audio>
      <AudioHandler />
    </>
  );
}

export default App;
