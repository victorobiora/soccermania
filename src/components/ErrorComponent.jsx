import classes from './ErrorComponent.module.css'

const ErrorComponent = props => {
   return <section className={classes.section}>
    <h1 className={classes.oops}>Oops..</h1>
    <h2 className={classes.text}>For some reason, we were not able to fetch the questions for the game</h2>
    <address>check your internet connectivity then try reloading</address>
   </section>
};

export default ErrorComponent;