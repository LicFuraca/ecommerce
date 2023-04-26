import { useContext } from "react";
import { Link } from "react-router-dom";

import FilterContext from "../contexts/FilterContext";

import classes from "./Footer.module.css";

const Footer = () => {
  const { changeCategoryHandler } = useContext(FilterContext);

  return (
    <footer className={classes.container}>
      <Link
        to="https://www.instagram.com"
        target="_blank"
        className={classes.followUs}
      >
        Follow us on Instagram: @flow-commerce
      </Link>
      <div className={classes.boxContainer}>
        <div className={`${classes.box} ${classes.dark}`}></div>
        <div className={`${classes.box} ${classes.light}`}></div>
        <div className={`${classes.box} ${classes.dark}`}></div>
        <div className={`${classes.box} ${classes.light}`}></div>
        <div className={`${classes.box} ${classes.dark}`}></div>
      </div>
      <nav className={classes.footerEnd}>
        <ul className={classes.navList}>
          <li onClick={changeCategoryHandler}>
            <Link to="/products-list">all</Link>
          </li>
          <li onClick={changeCategoryHandler}>
            <Link to="/products-list">women</Link>
          </li>
          <li>
            <Link onClick={changeCategoryHandler} to="/products-list">
              men
            </Link>
          </li>
          <li>
            <Link onClick={changeCategoryHandler} to="/products-list">
              accessories
            </Link>
          </li>
        </ul>
        <a href="#instagram" className={classes.copy}>
          Copyright Flow Commerce. All rights reserved.
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
