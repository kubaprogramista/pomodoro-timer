import Heading from "./components/Heading";
import Settings from "./components/Settings";
import AudioHandler from "./components/AudioHandler";

function App() {
  return (
    <>
      <main>
        <Heading title={"Pomodoro Timer"} />
        <Settings />
      </main>
      <AudioHandler />
    </>
  );
}

export default App;
