import GameScreen from "@/components/GameScreen";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import useCheck from "@/ui/useCheck";

const startplaying = () => {
  useCheck()
  const QuestionsArray = useSelector((state) => state.q.questions);


  return <Fragment>
    {QuestionsArray.length > 0 &&  <GameScreen />}
  </Fragment>

};

export default startplaying;
