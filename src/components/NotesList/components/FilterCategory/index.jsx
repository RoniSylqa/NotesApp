import React from "react";
import {actions as appActions} from "@sagas/notes/index";
import {connect} from "react-redux";
import SelectInput from "@common/select-input";
import "./index.scss";

const FilterByCategory = (props) => {
	const {allCategories, filterNotes, setSelectedCategory, selectedCategory} = props;

	return (
		<div className="searchnote">
			<SelectInput
				className="searchnote__select"
				options={allCategories}
				placeholder="Filter by Category..."
				value={selectedCategory}
				handleChange={(value) => {
					setSelectedCategory(value);
					filterNotes({
						type: "category",
						value: value.value,
					});
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allCategories: state.app.notes.index.allCategories,
	selectedCategory: state.app.notes.index.selectedCategory,
});
const mapDispatchToProps = {
	filterNotes: appActions.filterNotes,
	setSelectedCategory: appActions.setSelectedCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory);
