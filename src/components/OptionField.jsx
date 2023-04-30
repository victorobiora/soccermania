import { useState } from "react";
import classes from "./GameScreen.module.css";

const OptionField = (props) => {
  const [selected, setSelected] = useState(false);
  let givenColor;

   
  if(props.answered === false && props.backColor){
 givenColor = `${classes.answer} ${props.backColor ? classes.blue : ""}`;
  }else if(props.answered === true && props.backColor){
    console.log('it was answered')
    givenColor = `${classes.answer} ${props.setOption === props.correctAnswer ? classes.green : classes.red}`;
  }else if(props.answered === true && props.setOption === props.correctAnswer){
    givenColor = `${classes.answer} ${classes.green}`
  }else {
        givenColor = `${classes.answer}`
  }
  console.log(givenColor)


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
