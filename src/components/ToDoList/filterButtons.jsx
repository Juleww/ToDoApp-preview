import React, { Component } from "react";
import SelectButton from "./selectButton";
import "./filterButtons.css";

export default class FilterButtons extends Component {
	render() {
		return (
			<>
				<div className="filterButtonsContainer">
					<input type="date" />
					<SelectButton />
					<SelectButton />
					<SelectButton />
					<button>
						<div className="filterIcon"></div>Filter
					</button>
				</div>
			</>
		);
	}
}
