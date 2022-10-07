import TextArea from "@common/textarea";
import Typo from "@common/typo";
import React from "react";
import {connect} from "react-redux";

const NoteEditor = (props) => {
	const {formData, activeNote} = props;
	return (
		<div className="notedetails__editor">
			{activeNote?.id ? (
				<Typo isNote>{activeNote.description} </Typo>
			) : (
				<TextArea
					name="description"
					className="notedetails__editor--textarea"
					formData={formData}
				/>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	activeNote: state.app.notes.index.activeNote,
});

export default connect(mapStateToProps, null)(NoteEditor);
