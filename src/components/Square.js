import React from "react";

const Square = props => {
  const fill = props.black ? "black" : "white";
  const stroke = props.black ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%"
      }}
    >
      {props.children}
    </div>
  );
};

export default Square;
