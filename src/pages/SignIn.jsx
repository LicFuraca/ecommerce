import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import ValidationFooter from "../components/ValidationFooter";

import classes from "./SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userSignin, error } = useContext(AuthContext);

  const inputChangeHandler = event => {
    const type = event.target.type;

    if (type === "email") setEmail(event.target.value);
    if (type === "password") setPassword(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    userSignin(email, password);
  };

  let errorText = null;
  if (error === "auth/wrong-password") {
    errorText = "Password incorrect, try again";
  } else if (error === "auth/user-not-found") {
    errorText = "Email is not an user, try again";
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <h2>Flow Commerce</h2>
          </Link>
        </div>
        <div className={classes.right}>
          <span>New at Flow Commerce?</span>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      </header>
      <section className={classes.container}>
        <div className={classes.card}>
          <div className={classes.content}>
            <h2>Sign In</h2>
            <form className={classes.form} onSubmit={submitHandler}>
              <div className={classes.formControl}>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" onChange={inputChangeHandler} />
              </div>
              <div className={classes.formControl}>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  id="pass"
                  onChange={inputChangeHandler}
                />
              </div>
              <button type="submit">Sign In</button>
              {error && <p className={classes.error}>{errorText}</p>}
            </form>
          </div>
        </div>
      </section>
      <ValidationFooter />
    </>
  );
};
export default SignIn;
