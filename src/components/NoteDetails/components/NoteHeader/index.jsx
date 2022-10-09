import React from "react";
import ButtonComponent from "@common/button";
import InputComponent from "@common/input";
import Typo from "@common/typo";
import {connect} from "react-redux";
import {actions as appActions} from "@sagas/notes/index";
import SelectInput from "@common/select-input";

const NoteHeader = ({activeNote, formData, allCategories}) => (
	<div className="notedetails__header">
		{activeNote.id ? (
			<>
				<Typo isTitle>{activeNote?.title}</Typo>
				<div className="notedetails__header--info">
					<Typo> {activeNote?.categoryObj?.label} </Typo> -
					<Typo>{activeNote?.createdAt}</Typo>
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
				<div className="notedetails__header--info">
					<SelectInput
						name="categoryObj"
						formData={formData}
						options={allCategories}
						placeholder="Select Category..."
					/>
				</div>
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
	allCategories: state.app.notes.index.allCategories,
});

const mapDispatchToProps = {
	addNote: appActions.addNote,
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteHeader);
