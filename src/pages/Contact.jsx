import { Link } from "react-router-dom";

import ValidationFooter from "../components/ValidationFooter";

import classes from "./Contact.module.css";

const Contact = () => {
	return (
		<section className={classes.container}>
			<div className={classes.mainCard}>
				<nav>
					<Link
						to={"/"}
						className={classes.logo}
					>
						Flow Commerce
					</Link>
				</nav>
				<div className={classes.cardContent}>
					<h2 className={classes.title}>Let´s Talk</h2>
					<form className={classes.form}>
						<div className={classes.formControl}>
							<label htmlFor="">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								required
							/>
						</div>
						<div className={classes.formControl}>
							<label htmlFor="">Mail</label>
							<input
								type="email"
								name="mail"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div className={classes.formControl}>
							<label htmlFor="">Message</label>
							<textarea
								name="Message"
								id="message"
								cols="30"
								rows="8"
								placeholder="Your message"
								required
							></textarea>
						</div>
						<button
							type="submit"
							className={classes.submit}
						>
							Send
						</button>
					</form>
				</div>
				<ValidationFooter />
			</div>
		</section>
	);
};
export default Contact;
