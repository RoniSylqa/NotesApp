import React from "react";
import ButtonComponent from "@common/button";
import InputComponent from "@common/input";
import Typo from "@common/typo";
import {connect} from "react-redux";
import {actions as appActions} from "@sagas/notes/index";

const NoteHeader = ({activeNote, formData}) => (
	<div className="notedetails__header">
		{activeNote.id ? (
			<>
				<Typo isTitle>{activeNote?.title}</Typo>
				<div className="notedetails__header--info">
					<Typo> Category </Typo> - <Typo>{activeNote?.createdAt}</Typo>
				</div>
			</>
		) : (
			<>
				<InputComponent
					name="title"
					formData={formData}
					className="notedetails__header--input"
					placeholder="Note title..."
				/>
				<ButtonComponent
					onClick={() => formData.handleSubmit()}
					className="notedetails__header--button"
					buttonText="Save"
				/>
			</>
		)}
	</div>
);

const mapStateToProps = (state) => ({
	activeNote: state.app.notes.index.activeNote,
});

const mapDispatchToProps = {
	addNote: appActions.addNote,
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteHeader);
