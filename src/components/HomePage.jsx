import classes from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className={classes.container}>
      <div className={classes.containerContent}>
        <h2 className={classes.appName}>SoccerMania</h2>
        <div className={classes.detail}>
          <em>
            15 questions to test your knowledge on the world's biggest sport
          </em>
          <div className={classes.play}>
            <Link href="play">
              <button className={`${classes.playBounce} ${classes.playButton}`}>
                Play
              </button>
            </Link>

            <button className={classes.playButton}>About</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
