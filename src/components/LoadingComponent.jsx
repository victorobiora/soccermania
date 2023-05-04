import classes from "./LoadingComponent.module.css";
import { ProgressBar } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <section className={classes.container}>
      <ProgressBar
        height="80"
        width="100%"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#FFFFFF"
        barColor="#0000FF"
      />

      <h2 className={classes.text}>Don't run away now....</h2>
    </section>
  );
};

export default LoadingPage;
