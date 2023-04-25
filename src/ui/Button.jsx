import classes from "./Button.module.css";

const Button = (props) => {
  const givenColor = props.color === "red" ? classes.red : classes.green;
  console.log(givenColor);

  return <button className={`${classes.button} ${givenColor}`}>{props.children}</button>;
};

export default Button;
