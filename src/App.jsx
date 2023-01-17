import React from "react";
import AddThings from "./components/AddThings";
import Joke from "./components/Joke";
import jokesData from "./jokesData.js";
import MemeGenerator from "./components/MemeGenerator";
import Counter from "./components/Counter";
import ComplexStateObjects from "./components/ComplexStateObjects";
import boxes from "./boxes";
import Box from "./components/Box";
import Form from "./components/Form";
import WindowTracker from "./components/WindowTracker";
import Services from "./components/Services";

const App = () => {
  // console.log(jokesData);
  // const jokeElements = jokesData.map((joke) => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />;
  // });

  // const [squares, setSquares] = React.useState(boxes);

  // // same as below but declarative
  // function toggle(id) {
  //   setSquares((prevState) => {
  //     return prevState.map((square) => {
  //       return id === square.id ? { ...square, on: !square.on } : square;
  //     });
  //   });
  // }
  //  ** same as above but imperative **
  //   function toggle(id) {
  //     setSquares(prevSquares => {
  //         const newSquares = []
  //         for(let i = 0; i < prevSquares.length; i++) {
  //             const currentSquare = prevSquares[i]
  //             if(currentSquare.id === id) {
  //                 const updatedSquare = {
  //                     ...currentSquare,
  //                     on: !currentSquare.on
  //                 }
  //                 newSquares.push(updatedSquare)
  //             } else {
  //                 newSquares.push(currentSquare)
  //             }
  //         }
  //         return newSquares
  //     })
  // }

  // const squaresElements = squares.map((square) => {
  //   return (
  //     <Box
  //     handleClick={() => toggle(square.id)}
  //     key={square.id}
  //     on={square.on}
  //     />
  //   );
  // });

  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div>
      {/* <div className="container-flexwrap">{jokeElements}</div> */}

      {/* <MemeGenerator /> */}

      {/* <AddThings /> */}

      {/* <Counter /> */}

      {/* <ComplexStateObjects /> */}

      {/* <div className="box-container">{squaresElements}</div> */}

      {/* <Form /> */}

      {/* <div className="container">
        <button onClick={toggle}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div> */}

      <Services/>
    </div>
  );
};

export default App;
