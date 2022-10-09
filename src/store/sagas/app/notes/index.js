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
		categoryName: null,
		id: null,
		description: "",
		createdAt: null,
	},
	searchValue: "",
	allCategories: [],
};

export const ADD_NOTE = `ADD_NOTE`;
export const SET_ACTIVE_NOTE = `SET_ACTIVE_NOTE`;
export const SET_NOTE_TO_BLANK = `SET_NOTE_TO_BLANK`;
export const FILTER_NOTES = `FILTER_NOTES`;
export const SET_SEARCH_VALUE = `SET_SEARCH_VALUE`;
export const ADD_CATEGORY = `ADD_CATEGORY`;

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
				toast.success("Note created!");
				break;
			case ADD_CATEGORY:
				const category = {
					label: action.payload.categoryName,
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
				draft.filteredNotes = state.allNotes.filter((item) =>
					item?.title?.toLowerCase().includes(action.payload.toLowerCase()),
				);
				break;
			case SET_SEARCH_VALUE:
				draft.searchValue = action.payload;
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
};

export const sagas = {};

// eslint-disable-next-line no-empty-function
export const watcher = function* w() {};
