import classes from "./Game.module.css";
import Square from "./Square";
import { useState } from "react";
const DUMMY_DATA = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const winner = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["02", "11", "20"],
];
const Game = (props) => {
  const [content, setContent] = useState(DUMMY_DATA);
  const [turn, setTurn] = useState(false);
  function resetHandler() {
    setContent(DUMMY_DATA);
  }
  function checkWinner() {
    for (let i = 0; i < 7; i++) {
      if (
        content[winner[i][0][0]][winner[i][0][1]] ===
          content[winner[i][1][0]][winner[i][1][1]] &&
        content[winner[i][1][0]][winner[i][1][1]] ===
          content[winner[i][2][0]][winner[i][2][1]] &&
        content[winner[i][2][0]][winner[i][2][1]] !== ""
      ) {
        return content[winner[i][2][0]][winner[i][2][1]];
      }
    }
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (content[i][j] !== "") {
          count++;
        }
      }
    }
    if (count === 9) return "draw";
    return "";
  }
  function XO(prevContent) {
    const newContent = [];
    for (let i in content) {
      newContent.push(content[i].slice());
    }
    newContent[this.id[0]][this.id[1]] = this.value;
    return newContent;
  }
  function changeValue() {
    if (this.value === "" && checkWinner() === "") {
      if (turn === false) {
        setContent(XO.bind({ value: "O", id: this.id }));
      } else {
        setContent(XO.bind({ value: "X", id: this.id }));
      }
      setTurn((prev) => !prev);
    }
  }
  let x = checkWinner();
  if (x === "O") {
    console.log("Winner is O");
  } else if (x === "X") {
    console.log("Winner is X");
  }

  let i = -1;
  const board = content.map((arr) => {
    let j = 0;
    i++;
    return (
      <div className={classes.row} key={i}>
        {arr.map((item) => (
          <Square
            value={item}
            key={i + "" + j++}
            onClick={changeValue.bind({ id: i + "" + j, value: item })}
          />
        ))}
      </div>
    );
  });
  let header = <h1 className={classes.header}>Turn of : {turn ? "X" : "O"}</h1>;
  if (x === "draw") {
    header = <h1 className={classes.header}>It is a Draw</h1>;
  } else if (x !== "") {
    header = <h1 className={classes.header}>Winner is {x}</h1>;
  }
  return (
    <>
      {header}
      <div className={classes.col}>{board}</div>
      <div className={classes.container}>
        <button onClick={resetHandler} className={classes.button}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Game;
