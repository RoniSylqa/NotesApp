import {useFormik} from "formik";
import React from "react";
import * as yup from "yup";
import {connect} from "react-redux";
import {actions as appActions} from "@sagas/notes/index";
import NoteEditor from "./components/NoteEditor";
import NoteHeader from "./components/NoteHeader";
import "./index.scss";

const NoteDetails = (props) => {
	const {addNote, activeNote, filterNotes, setSearchValue} = props;

	const validationSchema = yup.object().shape({
		title: yup.string().required("Title is required"),
		description: yup.string().required("Description is required"),
		categoryName: yup.object().nullable().required("Category is required"),
	});

	const formik = {
		...useFormik({
			validationSchema,
			initialValues: activeNote,
			enableReinitialize: true,
			onSubmit: (fieldValues) => {
				addNote(fieldValues);
				formik.resetForm();
				filterNotes("");
				setSearchValue("");
			},
		}),
	};

	return (
		<div className="notedetails">
			<NoteHeader formData={formik} />
			<NoteEditor formData={formik} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	activeNote: state.app.notes.index.activeNote,
	allNotes: state.app.notes.index.allNotes,
});

const mapDispatchToProps = {
	addNote: appActions.addNote,
	filterNotes: appActions.filterNotes,
	setSearchValue: appActions.setSearchValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
