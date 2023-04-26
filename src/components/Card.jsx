import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.cardContainer}>
      <div
        className={classes.card}
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <button>{props.text}</button>
      </div>
    </div>
  );
};
export default Card;
