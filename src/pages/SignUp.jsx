import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import ValidationFooter from "../components/ValidationFooter";

import classes from "./SignUp.module.css";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { userLogin, error } = useContext(AuthContext);

	const inputChangeHandler = (event) => {
		const type = event.target.type;

		if (type === "email") setEmail(event.target.value);
		if (type === "password") setPassword(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		userLogin(email, password);
	};

	let errorText = null;
	if (error === "auth/weak-password") {
		errorText = "Password is too short, must have at least 6 characters";
	} else if (error === "auth/email-already-in-use") {
		errorText = "That email is already registered.";
	} else if (error === "auth/invalid-email") {
		errorText = "Please enter a valid email";
	} else {
		errorText = "Something went wrong";
	}

	return (
		<>
			<section className={classes.container}>
				<article className={classes.pageContent}>
					<header className={classes.header}>
						<div className={classes.logo}>
							<Link to="/">
								<h2>Flow Commerce</h2>
							</Link>
						</div>
						<div className={classes.right}>
							<span>Already registered?</span>
							<Link to="/sign-in">
								<button>Sign In</button>
							</Link>
						</div>
					</header>
					<div className={classes.mainContent}>
						<form
							className={classes.form}
							onSubmit={submitHandler}
						>
							<div className={classes.formControl}>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									onChange={inputChangeHandler}
								/>
							</div>
							<div className={classes.formControl}>
								<label htmlFor="pass">Password</label>
								<input
									type="password"
									id="pass"
									onChange={inputChangeHandler}
								/>
							</div>

							<button type="submit">Sign Up</button>
							{error && <p className={classes.error}>{errorText}</p>}
						</form>

						<div className={classes.titles}>
							<h2>Create your account</h2>
							<span>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</span>
							<img
								src="images/signUp3.jpg"
								alt=""
							/>
						</div>
					</div>
					<ValidationFooter />
				</article>
			</section>
		</>
	);
};
export default SignUp;
