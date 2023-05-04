import classes from "./LevelComponent.module.css";
import Level from "./Level";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { qActions } from "@/store/soccer-redux";
import { useRouter } from "next/router";
import Button from "@/ui/CustomButton";


const LevelComponent = (props) => {
  const levelsArray = useSelector(state => state.levels.levelNo);
  const failedState = useSelector(state => state.levels.hasFailed);
  const QuestionsArray = useSelector((state) => state.q.questions);
  const router = useRouter();
  const dispatch = useDispatch()
  let nextOrPlayAgain = 'Next Question'

    //First check if we're on the last question, then update button to play again.
    if (QuestionsArray.length === 1) {
      nextOrPlayAgain = 'Play Again'
    }



  const startOverHandler = ()=> {
    dispatch(qActions.clearQuestions());
    router.push('/')
  };

  const nextQuestionHandler = () => {
      dispatch(qActions.updateNextQuestion());
      if(QuestionsArray.length === 1){
        router.push('/play')
      }else{
          router.push('/play/startplaying') 
      }
   
  }
 
  return (
    <div className={classes.overallContainer}>
          <section className={classes.itemsContainer}>
      {levelsArray.map((el) => (
      <Level key={el.level} passed = {el.passed} passing={el.passing} selectedLevel= {el.level}/>
      ))}
     
    </section>
  <div className={classes.buttonContainer}>
     <Button onClick={startOverHandler}> Home </Button>
     {!failedState &&    <Button color= 'blue' onClick={nextQuestionHandler}> {nextOrPlayAgain}</Button>}
  
  </div>
    </div>

  );
};

export default LevelComponent;
