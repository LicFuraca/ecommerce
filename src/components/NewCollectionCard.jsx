import classes from "./NewCollectionCard.module.css";

const NewCollectionCard = ({ title, text, image }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.infoContainer}>
        <h2 className={classes.cardTitles}>{title}</h2>
        <p className={classes.cardText}>{text}</p>
      </div>
      <img src={image} alt={title} className={classes.cardImage} />
    </div>
  );
};
export default NewCollectionCard;
