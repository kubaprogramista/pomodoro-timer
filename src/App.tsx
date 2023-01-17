import Heading from "./components/Heading";
import Content from "./components/Content";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <>
      <main>
        <DarkMode />
        <Heading title={"Pomodoro Timer"} />
        <Content />
        <audio controls src="src/audio/alarm.mp3" autoPlay muted loop></audio>
      </main>
    </>
  );
}

export default App;
