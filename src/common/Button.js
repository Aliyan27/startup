import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <span className="btn" onClick={props.clickFunction}>
      {props.title}
    </span>
  );
};

export default Button;
