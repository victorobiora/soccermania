import { useState } from "react";
import classes from "./GameScreen.module.css";

const OptionField = (props) => {
  const [selected, setSelected] = useState(false);

  const givenColor = `${classes.answer} ${props.backColor ? classes.blue : ""}`;

  const pickedOptionHandler = (el) => {
    setSelected(true);
    props.returnValue(props.setOption);
  };

  return (
    <div className={givenColor} onClick={pickedOptionHandler}>
      <h3>{props.position}</h3>
      <h3>{props.setOption}</h3>
    </div>
  );
};

export default OptionField;
