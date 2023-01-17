import React from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  //Not best practices when old state is needed
  function handleClickMinus() {
    setCounter(counter - 1); // dont use couter--,++ either
  }

  //Best practices is with a callback function
  // function handleClickPlus() {
  //   setCounter(function (oldValue) {
  //     return oldValue + 1;
  //   });
  // }

  //Can be as arrow function to simplifly
  function handleClickPlus() {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={handleClickMinus}>
        –
      </button>
      <div className="counter--count">
        <h1>{counter}</h1>
      </div>
      <button className="counter--plus" onClick={handleClickPlus}>
        +
      </button>
    </div>
  );
};

export default Counter;
