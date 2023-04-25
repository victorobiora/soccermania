import classes from "./LevelComponent.module.css";
import Level from "./Level";

const dummyL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const LevelComponent = (props) => {
  console.log("span" + dummyL[3].toString());
  return (
    <section className={classes.container}>
      {dummyL.map((level) => (
      <Level key={level} selectedLevel= {level}/>
      ))}
    </section>
  );
};

export default LevelComponent;
