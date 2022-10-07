import React from "react";
import "./index.scss";

const TextArea = (props) => {
	const {
		errors,
		handleChange,
		values,
		name,
		placeholder = "Note description...",
		className = "",
		formData,
	} = props;
	const onChange = formData ? formData.handleChange : handleChange;
	const textAreaValue = formData ? formData.values?.[name] : values;
	const error = formData?.errors?.[name];
	const touched = formData?.touched?.[name];

	return (
		<div className={`form_textarea ${errors && touched ? "error" : ""} ${className}`}>
			<textarea
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={textAreaValue}
			/>
			{error && touched && <span className="form_input--error">{error}</span>}
		</div>
	);
};

export default TextArea;
