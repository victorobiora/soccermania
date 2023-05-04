import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { qActions } from "@/store/soccer-redux";
import { levelThunk } from "@/store/soccer-redux";
import { useSelector } from "react-redux";
import { MongoClient } from "mongodb";
import ErrorComponent from "@/components/ErrorComponent";
import { useRouter } from "next/router";

const PlayGame = (props) => {
  const areThereQs = useSelector((state) => state.q.questions);
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataFetched, setdataFetched] = useState(null);

  useEffect(() => {
    if (props.setQuestions === null) {
      setdataFetched(false);
    } else {
      if (areThereQs.length === 0) {
        dispatch(qActions.addQuestions(props.setQuestions));
        setdataFetched(true);
        dispatch(levelThunk());
        router.push("/play/startplaying");
      } else if (areThereQs.length > 0) {
        setdataFetched(true);
        router.push("/play/startplaying");
      }
    }
  }, []);

  return <Fragment>{dataFetched === false && <ErrorComponent />}</Fragment>;
};

export const getStaticProps = async () => {
  let retrievedQuestionsObject;
  const easy = [];
  const mid = [];
  const hard = [];
  try {
    //Obtain the questions sent to mondodb database
    const client = await MongoClient.connect(
      "mongodb+srv://victorobioratech:Io5Lww9Od7QzkLem@cluster0.kleoeot.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    
    const db = client.db();

    const QuestionsCollection = db.collection("questions");

    const result = await QuestionsCollection.find().toArray();

    const data = [...result];

    const json = JSON.stringify(data);

    const parsedResult = JSON.parse(json);

    retrievedQuestionsObject = parsedResult[0];

    await client.close();

  } catch (err) {
      return {
        props: {
          setQuestions: null,
          error: JSON.stringify(err),
          fin: "fjvd",
        },
      };
    
  }

      //generate sequence for random questions to be picked
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
    
      easyQuestionsIndexesArray.forEach((el) => {
        easy.push(retrievedQuestionsObject.easyQuestions[el]);
      });
    
      midHardQuestionsIndexesArray.forEach((el) => {
        mid.push(retrievedQuestionsObject.midQuestions[el]);
        hard.push(retrievedQuestionsObject.hardQuestions[el]);
      });
    

  return {
    props: {
      setQuestions: [...easy, ...mid, ...hard],
    },
  };
};

export default PlayGame;
