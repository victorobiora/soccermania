import classes from "./GameScreen.module.css";
import Button from "@/ui/button";

const dummyQ = {
  question: "Who is the current Head Coach of AS Roma?",
  options: ["Jose Mourinho", "Pep Guardiola", "Carlo Ancelotti", "Sean Dyche"],
  correct: "Jose Mourinho",
};

const GameScreen = (props) => {

  return (
    <section className={classes.Q}>
      <div className={classes.question}>
        <h2>{dummyQ.question}</h2>
      </div>
      <div className={classes.options}>
        <div className={classes.answer}>
          <h3>
            <span>D. </span>
            {dummyQ.options[0]}
          </h3>
        </div>
        <div className={classes.answer}>
          <h3>
            <span>D. </span>
            {dummyQ.options[1]}
          </h3>
        </div>
        <div className={classes.answer}>
          <h3>
            <span>D. </span>
            {dummyQ.options[2]}
          </h3>
        </div>
        <div className={classes.answer}>
          <h3>
            <span>D. </span>
            {dummyQ.options[3]}
          </h3>
        </div>
      </div>
      <div className={classes.confirmation}>
          <h3>Is that your final answer?</h3>
          <Button color='red'>No</Button>
          <Button color='green'>Yes</Button>

      </div>
    </section>
  );
};

export default GameScreen;
