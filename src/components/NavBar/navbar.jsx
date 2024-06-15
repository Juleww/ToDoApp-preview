import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<div className="Navbar">
					<div className="LogoContainer">
						<div
							onClick={() => this.props.handleChangePage(0)}
							className="Logo"
						></div>
					</div>
					<nav>
						<div className="line"></div>
						<div
							onClick={() => this.props.handleChangePage(1)}
							className={`IconContainer ${
								this.props.currentSite === 1 ? "CurrentPage" : ""
							}`}
						>
							<div className="NavIcon Icon1"></div>
						</div>
						<div
							onClick={() => this.props.handleChangePage(2)}
							className={`IconContainer ${
								this.props.currentSite === 2 ? "CurrentPage" : ""
							}`}
						>
							<div className="NavIcon Icon2"></div>
						</div>
						<div
							onClick={() => this.props.handleChangePage(3)}
							className={`IconContainer ${
								this.props.currentSite === 3 ? "CurrentPage" : ""
							}`}
						>
							<div className="NavIcon Icon3"></div>
						</div>
						<div
							onClick={() => this.props.handleChangePage(4)}
							className={`IconContainer ${
								this.props.currentSite === 4 ? "CurrentPage" : ""
							}`}
						>
							<div className="NavIcon Icon4"></div>
						</div>
						<div
							onClick={() => this.props.handleChangePage(5)}
							className={`IconContainer ${
								this.props.currentSite === 5 ? "CurrentPage" : ""
							}`}
						>
							<div className="NavIcon Icon5"></div>
						</div>
						<div className="line"></div>
					</nav>
					<div className="SettingsBox">
						<div
							onClick={() => this.props.handleChangePage(6)}
							className={`SettingsContainer ${
								this.props.currentSite === 6 ? "CurrentPageSettings" : ""
							}`}
						>
							<div className="Settings"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
