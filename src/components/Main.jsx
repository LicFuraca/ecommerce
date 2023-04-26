import { Link } from "react-router-dom";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.textContainer}>
          <h2>find the best fashion style for you</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ab
            dolor saepe dolorem tenetur natus maxime consequatur facere
            inventore omnis aut esse, veniam, asperiores deserunt! Voluptatibus
            deleniti magnam doloremque beatae!
          </p>
          <Link to="/products-list">
            <button>shop now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Main;
