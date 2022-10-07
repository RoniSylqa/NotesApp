import React from "react";
import NotesList from "@components/NotesList";
import NoteDetails from "@components/NoteDetails";
import "./index.scss";

const Layout = () => (
	<div className="layout">
		<NotesList className="layout__noteslist" />
		<NoteDetails />
	</div>
);

export default Layout;
