import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import dice from "./assets/icon-dice.svg";
import line1 from './assets/pattern-divider-desktop.svg'
import line2 from './assets/pattern-divider-mobile.svg'

function App() {
  const [advice, setAdvice] = useState([]);

  const api = "https://api.adviceslip.com/advice"

  const getAdvice = async () => {
    const response = await fetch(api)
    const data = await response.json()
    setAdvice(data.slip)
  }

  useEffect(() => {
    getAdvice()
  },[])

  console.log(advice)

  return (
    <div className="App">
      <div className="container">
        <h4>ADVICE #{advice.id}</h4>
        <p>"{advice.advice}"</p>
        <img className="line-desktop" src={line1} alt={line1} />
        <img className="line-mobile" src={line2} alt={line2} />
        <button onClick={() => getAdvice()}><img id="dice" src={dice} alt={dice} /></button>
      </div>
    </div>
  );
}

export default App;
