import classes from "./Form.module.css";
import { useRef } from "react";
const Form = (props) => {
  const player1ref = useRef();
  const player2ref = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const p1 = player1ref.current.value;
    const p2 = player2ref.current.value;
    props.passData({ p1, p2 });
  }
  return (
    <form className={classes["form-control"]} onSubmit={submitHandler}>
      <div className={classes["form-player"]}>
        <div className={classes.player}>
          <label htmlFor="p1">Player 1</label>
          <input type="text" name="p1" id="p1" ref={player1ref} />
        </div>
        <div className={classes.player}>
          <label htmlFor="p2">Player 2</label>
          <input type="text" name="p2" id="p2" ref={player2ref} />
        </div>
      </div>
      <div>
        <button className={classes.button} type="Submit">
          Start
        </button>
      </div>
    </form>
  );
};
export default Form;
