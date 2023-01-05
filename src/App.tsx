import Heading from "./components/Heading";
import Content from "./components/Content";
import AudioHandler from "./components/AudioHandler";

function App() {
  return (
    <>
      <main>
        <Heading title={"Pomodoro Timer"} />
        <Content />
      </main>
      <AudioHandler />
    </>
  );
}

export default App;
