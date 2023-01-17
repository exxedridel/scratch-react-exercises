import React from "react";
import StarEmpty from "../images/star-empty.png";
import StarFilled from "../images/star-filled.png";

const Star = (props) => {
  const starIcon = props.isFilled ? StarFilled : StarEmpty;

  return (
    <img
      src={starIcon}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
};

export default Star;
