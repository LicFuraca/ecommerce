import classes from "./BestFashion.module.css";

const BestFashion = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.imgContainer}>
          <div className={classes.figure}></div>
          <img
            src="images/modista.png"
            alt="Women trying clothes on a maniquie"
            loading="lazy"
          />
        </div>
        <div className={classes.textContainer}>
          <h3>best fashion since 2014</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quas commodi dignissimos, similique inventore obcaecati laudantium
            non incidunt vitae adipisci nesciunt saepe, tempore qui. Id,
            consectetur laboriosam. Ducimus, id nemo? Suscipit, commodi quidem
            dignissimos porro facere, nobis odit maiores.
          </p>
        </div>
        <div className={classes.badgesContainer}>
          <div className={classes.badge}>
            <h4>2014</h4>
            <span>we openned</span>
          </div>
          <hr />
          <div className={classes.badge}>
            <h4>+8900</h4>
            <span>happy clients</span>
          </div>
          <hr />
          <div className={classes.badge}>
            <h4>+300</h4>
            <span>different products</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestFashion;
