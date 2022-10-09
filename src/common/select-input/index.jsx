import React from "react";
import "./index.scss";
import Select from "react-select";

const SelectInput = (props) => {
	const {
		errors,
		handleChange,
		value,
		name,
		className = "",
		formData,
		options,
		placeholder,
	} = props;
	const onChange = formData ? (value) => formData.setFieldValue([name], value) : handleChange;
	const error = formData?.errors?.[name];
	const touched = formData?.touched?.[name];
	const values = formData ? formData.values?.[name] : value;

	const customStyles = {
		container: (provided) => ({
			...provided,
			height: "40px",
		}),
		control: (provided) => ({
			...provided,
			height: "40px",
		}),
		valueContainer: (provided) => ({
			...provided,
			height: "40px",
		}),
		input: (provided) => ({
			...provided,
			height: "30px",
		}),
	};
	return (
		<div className={`form_input ${errors && touched ? "error" : ""} ${className}`}>
			<Select
				className={`form_input__select $ ${className}`}
				placeholder={placeholder}
				styles={customStyles}
				options={options}
				onChange={onChange}
				value={values}
			/>
			{error && touched && <span className="form_input--error">{error}</span>}
		</div>
	);
};

export default SelectInput;
