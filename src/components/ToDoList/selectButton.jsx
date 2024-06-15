import React from "react";
import "./selectButton.css";

const SelectButton = () => {
	return (
		<div className="selectionContainer">
			<select>
				<option value="default">Choose Status</option>
				<option value="status1">Status 1</option>
				<option value="status2">Status 2</option>
				<option value="status3">Status 3</option>
			</select>
		</div>
	);
};

export default SelectButton;
