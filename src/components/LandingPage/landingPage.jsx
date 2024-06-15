import React from "react";
import "./landingPage.css";

const LandingPage = (props) => {
	return (
		<div className="LandingPage">
			<div className="buttonsContainer">
				<div className="buttons">
					<button>Sign Up</button>
					<button>Login</button>
				</div>
			</div>
			<div className="text">
				<div className="Title">
					{/* {props.data.title} */}
          Stay on Track with Our ToDo App
				</div>
				<div className="line"></div>
				<div className="description">
					<span>Boost Your Productivity Effortlessly</span> with our ToDo app is
					your ultimate productivity companion, perfect for busy individuals and
					teams. Easily create and organize tasks, set deadlines, and get
					reminders to stay on track. Share tasks and projects to enhance
					teamwork and enjoy the satisfaction of checking off completed tasks as
					your productivity soars.
				</div>
				<div className="right">
					<button onClick={() => props.handleChangePage(1)}>Start Now!</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
