import classes from "./CustomButton.module.css";

const Button = (props) => {
  let givenColor = classes.grey 

  if(props.color === "red"){
     givenColor = classes.red
  }else if(props.color === 'blue'){
   givenColor =  classes.blue
  }

  

  return <button className={`${classes.button} ${givenColor}`} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
