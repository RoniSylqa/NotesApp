import React from "react";
import "./index.scss";

const InputComponent = (props) => {
	const {
		errors,
		handleBlur,
		handleChange,
		value,
		name,
		placeholder = "",
		type = "text",
		className = "",
		formData,
	} = props;
	const onChange = formData ? formData.handleChange : handleChange;
	const inputValue = formData ? formData.values?.[name] : value;
	const error = formData?.errors?.[name];
	const touched = formData?.touched?.[name];

	return (
		<div className={`form_input ${errors && touched ? "error" : ""} ${className}`}>
			<input
				name={name}
				onBlur={handleBlur}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				value={inputValue}
			/>
			{error && touched && <span className="form_input--error">{error}</span>}
		</div>
	);
};

export default InputComponent;
