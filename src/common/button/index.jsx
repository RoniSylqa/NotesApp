import React from "react";
import "./index.scss";
const ButtonComponent = (props) => {
	const {className = "", disabled, onClick, type = "submit", buttonText = "Button"} = props;
	return (
		<button
			className={`button ${className} ${disabled ? "button__disabled" : ""}`}
			disabled={disabled}
			onClick={onClick}
			type={type}
		>
			{buttonText}
		</button>
	);
};

export default ButtonComponent;
