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

        <iframe
          width="1904"
          height="768"
          src="https://www.youtube.com/embed/kcT-i9xzC-8?autoplay=1"
          allow="autoplay;"
        ></iframe>
      </main>
    </>
  );
}

export default App;
