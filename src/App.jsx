import "./App.css";
import logo from "../public/assets/images/logo.png";
import Button from "./components/Button";
import Accounter from "./components/Accounter";
import { useState } from "react";

function App() {
  const [numClick, setClick] = useState(0);

  const clickHandle = () => {
    setClick(numClick + 1);
  };

  const resetCounter = () => {
    setClick(0);
  };
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div>
        <Accounter numClick={numClick}/>
      </div>
      <div className="accounter-container">
        <Button text="Click" isClickButton={true} clickHandle={clickHandle} />
        <Button
          text="Restart"
          isClickButton={false}
          clickHandle={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
