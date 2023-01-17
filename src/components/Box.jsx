import React from "react";
import "../styles/Box.css";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "#548093" : "transparent",
  };

  return <div 
        style={styles} 
        onClick={props.handleClick} 
        className="box"
        >
        </div>;
};

export default Box;
