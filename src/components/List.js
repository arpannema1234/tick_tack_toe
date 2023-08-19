import classes from "./List.module.css";
const List = ({ list }) => {
  if (list.length === 0) return <></>;
  return (
    <ul className={classes.list}>
      {list.map((item) => {
        if (item.winner !== "draw") {
          return (
            <li className={classes.element} key={item.gameNumber}>
              {`${item.gameNumber} The winner is ${item.winner}`}
            </li>
          );
        } else if (item.winner === "draw") {
          return (
            <li className={classes.element} key={item.gameNumber}>
              {item.gameNumber} This Game was a draw
            </li>
          );
        }
        return <li></li>;
      })}
    </ul>
  );
};
export default List;
