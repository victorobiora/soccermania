import classes from "./LevelComponent.module.css";
import Level from "./Level";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { qActions } from "@/store/soccer-redux";
import { useRouter } from "next/router";
import Button from "@/ui/CustomButton";

const dummyL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const LevelComponent = (props) => {
  const levelsArray = useSelector(state => state.levels.levelNo);
  const router = useRouter();
  const dispatch = useDispatch()
  console.log(levelsArray);

  const startOverHandler = ()=> {
    dispatch(qActions.clearQuestions());
    router.push('/')
  };

  const nextQuestionHandler = () => {
      dispatch(qActions.updateNextQuestion());
      router.push('/play')
  }
 
  return (
    <Fragment>
          <section className={classes.container}>
      {levelsArray.map((el) => (
      <Level key={el.level} passed = {el.passed} passing={el.passing} selectedLevel= {el.level}/>
      ))}
     
    </section>
  <div className={classes.buttonContainer}>
     <Button onClick={startOverHandler}> HomePage </Button>
     <Button color= 'blue' onClick={nextQuestionHandler}> Next Question</Button>
  </div>
    </Fragment>

  );
};

export default LevelComponent;
