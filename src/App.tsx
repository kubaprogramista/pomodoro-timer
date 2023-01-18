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
        <video controls src="src/assets/alarm.wav" autoPlay muted loop></video>
      </main>
    </>
  );
}

export default App;
