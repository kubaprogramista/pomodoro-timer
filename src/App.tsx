import Heading from "./components/Heading";
import Form from "./components/Form";

function App() {
  let numberOne = document.querySelector(".number1");
  console.log(numberOne);

  const add = (v1: number, v2: number) => v1 + v2;
  return (
    <>
      <Heading title={"Put 2 numbers"} />
      <Form />
    </>
  );
}

export default App;
