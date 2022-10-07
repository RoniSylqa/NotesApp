import React, {useEffect} from "react";
import ButtonComponent from "@common/button";
import InputComponent from "@common/input";
import {actions as appActions} from "@sagas/notes/index";
import {connect} from "react-redux";
import "./index.scss";

const SearchNote = (props) => {
	const {filterNotes, setSearchValue, searchValue} = props;
	useEffect(() => {
		if (!searchValue.length) {
			filterNotes("");
		}
	}, [filterNotes, searchValue]);

	return (
		<div className="searchnote">
			<InputComponent
				value={searchValue}
				className="searchnote__input"
				handleChange={(e) => setSearchValue(e.target.value)}
			/>
			<ButtonComponent
				className="searchnote__button"
				buttonText="Search"
				onClick={() => filterNotes(searchValue)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	searchValue: state.app.notes.index.searchValue,
});
const mapDispatchToProps = {
	filterNotes: appActions.filterNotes,
	setSearchValue: appActions.setSearchValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchNote);
