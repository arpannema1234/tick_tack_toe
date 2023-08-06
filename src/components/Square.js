import React from "react";
import classes from "./Square.module.css";
const Square = (props) => {
  let realvalue = props.value;
  function buttonHandler() {
    props.onClick();
  }
  return (
    <div onClick={buttonHandler} className={classes.cell}>
      {realvalue}
    </div>
  );
};

export default Square;
