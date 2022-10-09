import React from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {actions as appActions} from "@sagas/notes/index";
import {connect} from "react-redux";
import InputComponent from "@common/input";
import ButtonComponent from "@common/button";
import "./index.scss";

const AddCategory = (props) => {
	const {addCategory, hide} = props;
	const validationSchema = yup.object().shape({
		categoryName: yup.string().required("Category Name is required"),
	});

	const formik = {
		...useFormik({
			validationSchema,
			initialValues: {categoryName: ""},
			enableReinitialize: true,
			onSubmit: (fieldValues) => {
				addCategory(fieldValues);
				formik.resetForm();
			},
		}),
	};
	return (
		<div className={`addCategory ${hide ? "addCategory__hide" : ""}`}>
			<InputComponent
				placeholder="Category Name"
				className="addCategory__input"
				formData={formik}
				name="categoryName"
			/>
			<ButtonComponent
				className="addCategory__button"
				buttonText="Save"
				onClick={() => formik.handleSubmit()}
			/>
		</div>
	);
};

const mapDispatchToProps = {
	addCategory: appActions.addCategory,
};
export default connect(null, mapDispatchToProps)(AddCategory);
