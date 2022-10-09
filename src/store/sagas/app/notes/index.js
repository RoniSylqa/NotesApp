import produce from "immer";
import moment from "moment/moment";
import toast from "react-hot-toast";
import createAction from "../../../../utils/action-creator";

export const NAVIGATE = "@app/navigation/NAVIGATE";

const _state = {
	allNotes: [],
	filteredNotes: [],
	activeNote: {
		title: "",
		categoryObj: null,
		id: null,
		description: "",
		createdAt: null,
	},
	searchValue: "",
	selectedCategory: null,
	allCategories: [],
};

export const ADD_NOTE = `ADD_NOTE`;
export const SET_ACTIVE_NOTE = `SET_ACTIVE_NOTE`;
export const SET_NOTE_TO_BLANK = `SET_NOTE_TO_BLANK`;
export const FILTER_NOTES = `FILTER_NOTES`;
export const SET_SEARCH_VALUE = `SET_SEARCH_VALUE`;
export const ADD_CATEGORY = `ADD_CATEGORY`;
export const SET_SELECTED_CATEGORY = `SET_SELECTED_CATEGORY`;

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case ADD_NOTE:
				const obj = {
					...action.payload,
					createdAt: moment().format("DD/MM/YYYY"),
					id: state.allNotes.length + 1,
				};
				draft.allNotes = state.allNotes.concat(obj);
				// Cleaer filtered notes after a new note is added
				draft.filteredNotes = [];
				toast.success("Note created!");
				break;
			case ADD_CATEGORY:
				const category = {
					label: action.payload.categoryObj,
					value: state.allCategories.length + 1,
				};
				draft.allCategories = state.allCategories.concat(category);
				toast.success("Category created!");
				break;
			case SET_ACTIVE_NOTE:
				const index = state.allNotes.findIndex((item) => item.id === action.payload);
				draft.activeNote = state.allNotes[index];
				break;

			case SET_NOTE_TO_BLANK:
				draft.activeNote = {
					title: "",
					category: "",
					id: null,
					description: "",
				};
				break;
			case FILTER_NOTES:
				if (action.payload.type === "category") {
					draft.filteredNotes = state.allNotes.filter(
						(item) => item?.categoryObj?.value === action.payload.value,
					);
				} else {
					draft.filteredNotes = state.allNotes.filter((item) =>
						item?.title?.toLowerCase().includes(action.payload.toLowerCase()),
					);
				}

				break;
			case SET_SEARCH_VALUE:
				draft.searchValue = action.payload;
				break;
			case SET_SELECTED_CATEGORY:
				draft.selectedCategory = action.payload;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	addNote: (payload) => createAction(ADD_NOTE, {payload}),
	addCategory: (payload) => createAction(ADD_CATEGORY, {payload}),
	setActiveNote: (payload) => createAction(SET_ACTIVE_NOTE, {payload}),
	setNoteToBlank: (payload) => createAction(SET_NOTE_TO_BLANK, {payload}),
	filterNotes: (payload) => createAction(FILTER_NOTES, {payload}),
	setSearchValue: (payload) => createAction(SET_SEARCH_VALUE, {payload}),
	setSelectedCategory: (payload) => createAction(SET_SELECTED_CATEGORY, {payload}),
};

export const sagas = {};

// eslint-disable-next-line no-empty-function
export const watcher = function* w() {};
