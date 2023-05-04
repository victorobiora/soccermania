import classes from "./LevelComponent.module.css";

const Level = (props) => {
  let color;

  if (props.passed && props.passing) {
    color = `${classes.structure} ${classes.answered} ${classes.passedColor} ${classes.addAnimation}`;
  } else if (props.passing && props.passed === false) {
    color = `${classes.structure} ${classes.failedColor} ${classes.addAnimation}`;
  } else if (!props.passing && props.passed) {
    color = `${classes.structure} ${classes.passedColor} ${classes.answered}`;
  } else if (!props.passing && props.passed === false) {
    color = `${classes.structure} ${classes.answered} ${classes.failedColor}`;
  } else if (props.passed === null) {
    color = `${classes.structure}`;
  }

  return (
    <div className={classes.item}>
      <div className={classes.pentagon}>
        <div className={color}>
          <h2>{props.selectedLevel}</h2>
        </div>
      </div>
    </div>
  );
};

export default Level;
