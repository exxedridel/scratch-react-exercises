import React from "react";
import "../styles/AddThings.css";

const AddThings = () => {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThingsArray((prevState) => [...prevState,`Thing ${prevState.length + 1}`,]);

    //Same expresion as the above
    // setThingsArray((prevState) => {
    //   return [...prevState, `Thing ${prevState.length + 1}`];
    // });
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="container-AddThing">
      <button onClick={addItem} className="bt-AddThing">
        Add Item
      </button>
      {thingsElements}
    </div>
  );
};

export default AddThings;
