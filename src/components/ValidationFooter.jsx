import classes from "./ValidationFooter.module.css";

const ValidationFooter = () => {
  return (
    <footer className={classes.footer}>
      <span>&copy; 2023. Flow Commerce Limited.</span>
      <nav>
        <ul className={classes.footerNav}>
          <li>
            <a href="#false">terms</a>
          </li>
          <li>
            <a href="#false">privacy</a>
          </li>
          <li>
            <a href="#false">security</a>
          </li>
          <li>
            <a href="#false">get in touch</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default ValidationFooter;
