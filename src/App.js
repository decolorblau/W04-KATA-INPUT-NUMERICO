import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";

//renderizar input i botones
//Almacenar un valor numérico
//Incrementar el valor (hasta 10)
//decrementar el valor (hasta 0)
//pasarle el valor numerico al input

function App() {
  const [number, setNumber] = useState(0);
  const incrementar = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const decrementar = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Button text="-" actionOnClick={decrementar} />
      <Input number={number} />
      <Button text="+" actionOnClick={incrementar} />
    </>
  );
}

export default App;
