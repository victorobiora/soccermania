import classes from "./Button.module.css";

const Button = (props) => {
  const givenColor = props.color === "red" ? classes.red : classes.blue;
  console.log(givenColor);

  return <button className={`${classes.button} ${givenColor}`} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
