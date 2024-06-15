import React, { Component } from "react";
import FilterButtons from "./filterButtons";
import CreateNewTaskBtn from "./createNewTaskBtn";
import TaskList from "./taskList";
import CreateNewTaskPopUp from "./createNewTaskPopUp";
import "./todolist.css";

export default class Todolist extends Component {
	render() {
		return (
			<div className="toDoList">
				<div className="notifications">
					<div className="notifIcon"></div>
					<div className="avatarIcon">
						<div className="blur"></div>
					</div>
				</div>

				<div className="tasksContainer">
					<div className="myTasks">My Tasks</div>
					<div className="filterContainer">
            <FilterButtons />
            {/* <CreateNewTaskBtn /> */}
          </div>
          {/* <CreateNewTaskPopUp />
					<TaskList /> */}
				</div>
			</div>
		);
	}
}
