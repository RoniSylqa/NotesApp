import Typo from "@common/typo";
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {actions as appActions} from "@sagas/notes/index";
import ButtonComponent from "@common/button";
import SearchNote from "./components/SearchNote";
import SingleNote from "./components/SingleNote";
import "./index.scss";
import AddCatgory from "./components/AddCategory";
import FilterCategory from "./components/FilterCategory";

const NotesList = (props) => {
	const {allNotes, setActiveNote, activeNote, setNoteToBlank, filteredNotes} = props;
	const [notes, setNotes] = useState(allNotes);
	const [show, setShow] = useState(false);

	const toggleAddCategory = () => setShow(!show);

	useEffect(() => {
		if (filteredNotes?.length > 0) {
			setNotes([...filteredNotes]);
		} else {
			setNotes([...allNotes]);
		}
	}, [allNotes, filteredNotes]);

	return (
		<div className="noteslist">
			<SearchNote />
			<FilterCategory />
			{notes.length ? <Typo>All Notes</Typo> : <Typo>No Notes Found!</Typo>}
			{notes.map((item) => (
				<SingleNote
					key={item.id}
					onClick={() => setActiveNote(item.id)}
					noteTitle={item.title}
				/>
			))}
			<ButtonComponent
				buttonText="Create new note"
				className="noteslist__button first"
				disabled={!activeNote?.id}
				onClick={() => setNoteToBlank()}
			/>
			{!show && (
				<ButtonComponent
					onClick={() => toggleAddCategory()}
					buttonText="Create new category"
					className="noteslist__button"
				/>
			)}
			<AddCatgory hide={!show} toggleAddCategory={toggleAddCategory} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	allNotes: state.app.notes.index.allNotes,
	filteredNotes: state.app.notes.index.filteredNotes,
	activeNote: state.app.notes.index.activeNote,
});
const mapDispatchToProps = {
	setActiveNote: appActions.setActiveNote,
	setNoteToBlank: appActions.setNoteToBlank,
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
