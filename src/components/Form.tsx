import { useState } from "react";

const Form = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [suma, setSuma] = useState(0);

  return (
    <>
      <br />
      <input
        type="number"
        className="number1"
        onChange={(e) => setNumber1(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        className="number2"
        onChange={(e) => setNumber2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setSuma(+number1 + +number2)}>Add</button>
      <div className="result">Suma: {suma}</div>
    </>
  );
};

export default Form;
