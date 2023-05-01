import GameScreen from "@/components/GameScreen";
import { Fragment } from "react";
import totalQuestions from "@/ui/questions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { qActions } from "@/store/soccer-redux";
import { levelThunk } from "@/store/soccer-redux";
import { useSelector } from "react-redux";

const PlayGame = (props) => {
  const areThereQs = useSelector((state) => state.q.questions);
  const dispatch = useDispatch();
  const [dataFetched, setdataFetched] = useState(false);

  useEffect(() => {
    if (areThereQs.length === 0) {
    dispatch(qActions.addQuestions(props.setQuestions));
    setdataFetched(true);
    dispatch(levelThunk());
    }else if(areThereQs.length > 0){
      setdataFetched(true);
    }

  }, []);
  console.log('i reloaded')

  return <Fragment>{dataFetched && <GameScreen/>}</Fragment>;
};

export const getStaticProps = async () => {
  const generateQuestionsArray = (arg) => {
    const randomNumbers = [];

    for (let index = 0; randomNumbers.length < 5; index++) {
      const num = Math.floor(Math.random() * arg);

      const similar = randomNumbers.findIndex((el) => el === num);

      if (similar === -1) {
        randomNumbers.push(num);
      }
    }

    return randomNumbers;
  };

  const easyQuestionsIndexesArray = generateQuestionsArray(20);
  const midHardQuestionsIndexesArray = generateQuestionsArray(15);
  const easy = [];
  const mid = [];
  const hard = [];

  easyQuestionsIndexesArray.forEach((el) => {
    easy.push(totalQuestions.easyQuestions[el]);
  });

  midHardQuestionsIndexesArray.forEach((el) => {
    mid.push(totalQuestions.midQuestions[el]);
    hard.push(totalQuestions.hardQuestions[el]);
  });

  return {
    props: {
      setQuestions: [...easy, ...mid, ...hard],
    },
  };
};

export default PlayGame;
