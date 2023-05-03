import classes from "./GameScreen.module.css";
import Button from "@/ui/CustomButton";
import { useSelector } from "react-redux";
import { useState } from "react";
import OptionField from "./OptionField";
import { useDispatch } from "react-redux";
import { qActions } from "@/store/soccer-redux";
import { useRouter } from "next/router";
import { levelActions } from "@/store/soccer-redux";

const GameScreen = (props) => {
  const [showConfirm, setshowConfirm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [answeredQuestion, setAnsweredQuestion] = useState(false);
  const QuestionsArray = useSelector((state) => state.q.questions);
  const dispatch = useDispatch();
  const router = useRouter()
  const setQuestion = QuestionsArray[0];
  const correctAnswer = setQuestion.correctAnswer;
  console.log(setQuestion, correctAnswer);

  //Structure our picked question in order to input OptionField dynamically
  const structuredQuestion = [
    {
      position: "A. ",
      option: setQuestion.options[0],
    },
    {
      position: "B. ",
      option: setQuestion.options[1],
    },
    {
      position: "C. ",
      option: setQuestion.options[2],
    },
    {
      position: "D. ",
      option: setQuestion.options[3],
    },
  ];

  // Store selected option in state
  const selectedOptionHandler = (val) => {
    if (answeredQuestion) {
      return;
    }
    setshowConfirm(true);
    setSelectedOption(val);
  };

  //Remove selected option from state and also remove Confirmation box
  const removeConfirmHandler = () => {
    setSelectedOption("");
    setshowConfirm(false);
  };

  //confirm if user got the answer right or not then relay that to the redux store
  //passed value will be used in evaluating if a new question is pushed or if it's game over
  const checkAnswerHandler = (el) => {
    setAnsweredQuestion(true);
    setshowConfirm(false);
    if(correctAnswer === selectedOption) {
         dispatch(qActions.setPassed(true))
         dispatch(levelActions.addPassingStage({status: true}))
    }else if(correctAnswer !== selectedOption){
        dispatch(qActions.setPassed(false))
        dispatch(levelActions.addPassingStage({status: false}))
        dispatch(levelActions.updateFailedState())
    }
    // move to levels page 
    setTimeout(()=> {
      router.push('/play/level')
    },
    1000)
    
  };

  return (
    <section className={classes.Q}>
      <div className={classes.question}>
        <h2>{setQuestion.question}</h2>
      </div>
      <div className={classes.options}>
        {structuredQuestion.map((q) => (
          <OptionField
            position={q.position}
            setOption={q.option}
            returnValue={selectedOptionHandler}
            backColor={selectedOption === q.option}
            key={q.position}
            answered={answeredQuestion}
            correctAnswer={correctAnswer}
          />
        ))}
        {showConfirm && (
          <div className={classes.confirmation}>
            <h3>Is that your final answer?</h3>
            <Button color="red" onClick={removeConfirmHandler}>
              No
            </Button>
            <Button color="blue" onClick={checkAnswerHandler}>
              Yes
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameScreen;
