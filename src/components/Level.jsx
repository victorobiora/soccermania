import classes from "./LevelComponent.module.css";

const Level = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.pentagon}>
        <div className={classes.color}>
          <h2>{props.selectedLevel}</h2>
        </div>
      </div>
    </div>
  );
};

export default Level;
