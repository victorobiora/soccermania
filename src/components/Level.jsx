import classes from './LevelComponent.module.css'

const Level = props => {
 return (
    <div className={classes.item}>
    <span></span>
    <div className={classes.pentagon}>
      <h2>{props.selectedLevel}</h2>
    </div>
    <span></span>
  </div>
 )
}

export default Level