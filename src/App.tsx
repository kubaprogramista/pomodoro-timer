import Content from "./components/Content";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <>
      <main>
        <DarkMode />
        <h1>Pomodoro Timer</h1>
        <Content />
      </main>
    </>
  );
}

export default App;
