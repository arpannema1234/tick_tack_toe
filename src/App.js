import Form from "./components/Form";
import Game from "./components/Game";
import List from "./components/List";
import classes from "./App.module.css";
import { useCallback, useState } from "react";
const initialState = { p1: "O", p2: "X" };
function App() {
  const [player, setPlayer] = useState(initialState);
  const [list, setList] = useState([]);
  function passData(name) {
    setPlayer(name);
  }
  const passResult = useCallback(
    (result) => {
      setList((prev) => {
        let newarr = prev.slice();
        newarr.push({ winner: result, gameNumber: prev.length + 1 });
        newarr = newarr.filter((item) => item.winner !== "");
        return newarr;
      });
    },
    [setList]
  );
  const resetEveryThing = useCallback(() => {
    setList([]);
    setPlayer(initialState);
  }, [setList, setPlayer]);
  return (
    <div className={classes.app}>
      <div className={classes.div}>
        <Game
          p1={player.p1}
          p2={player.p2}
          passResult={passResult}
          resetEveryThing={resetEveryThing}
        />
        {list.length === 0 && player === initialState && (
          <Form passData={passData} />
        )}
      </div>
      <div className={classes.div} id={classes.div2}>
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
