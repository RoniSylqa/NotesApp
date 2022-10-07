import React from "react";
import "./index.scss";

const Typo = (props) => {
	const {className = "", children, isTitle = false, isNote = false} = props;
	return (
		<p
			className={`typo ${isTitle ? "typo__title" : ""} ${
				isNote ? "typo__note" : ""
			} ${className}`}
		>
			{children}
		</p>
	);
};

export default Typo;
