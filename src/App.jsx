import React, { Component } from "react";
import Navbar from "./components/NavBar/navbar";
import LandingPage from "./components/LandingPage/landingPage";
import Todolist from "./components/ToDoList/todolist";
import "./App.css";
// import { data } from "./data.js";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSite: 0,
		};
	}

	handleChangePage = (pageNumber) => {
		this.setState({
			currentSite: pageNumber,
		});
	};

	render() {
		return (
			<div className="App">
				<Navbar
					currentSite={this.state.currentSite}
					handleChangePage={this.handleChangePage}
				/>
				{this.state.currentSite === 0 ? (
					<LandingPage
						handleChangePage={this.handleChangePage}
						// data={data.landingPage}
					/>
				) : this.state.currentSite === 1 ? (
					<Todolist handleChangePage={this.handleChangePage} />
				) : null}
			</div>
		);
	}
}
