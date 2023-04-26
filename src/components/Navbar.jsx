import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import AuthContext from "../contexts/AuthContext";
import ShoppingCart from "./ShoppingCart";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const { isLoggedIn, userLogout } = useContext(AuthContext);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const menuVisibilityHandler = () => {
    setHideMenu(!hideMenu);
  };

  const menuVisibilityClasses = !hideMenu ? `${classes.hideNav}` : ``;

  return (
    <header className={classes.navbar}>
      <span className={`${classes.menuToggle} ${classes.showMenuToggle}`}>
        <MenuIcon onClick={menuVisibilityHandler} />
      </span>
      <nav className={`${classes.left} ${menuVisibilityClasses}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products-list">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.center}>
        <Link to="/">
          <h2>Flow Commerce</h2>
        </Link>
      </div>
      <nav className={`${classes.right} ${menuVisibilityClasses}`}>
        <ul>
          {isLoggedIn ? (
            <ul>
              <li className={classes.logout} onClick={userLogout}>
                Logout
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/sign-in">Sign in</Link>
              </li>
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
      <span className={classes.cartIcon} onClick={showCartHandler}>
        <ShoppingCartIcon />
      </span>
      <ShoppingCart showCart={showCart} />
    </header>
  );
};

export default Navbar;
