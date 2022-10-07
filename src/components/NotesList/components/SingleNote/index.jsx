import React from "react";
import "./index.scss";
import EyeIcon from "@assets/icons/eye.png";

const SingleNote = (props) => {
	const {noteTitle, onClick} = props;
	return (
		<div onClick={onClick} className="singlenote">
			<img src={EyeIcon} alt="" />
			<p>{noteTitle}</p>
		</div>
	);
};

export default SingleNote;
