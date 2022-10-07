/* eslint-disable import/no-extraneous-dependencies */
import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import notes from "@sagas/notes";

export default function createReducer(injectedReducers, history) {
	return combineReducers({
		app: combineReducers({
			notes: combineReducers({
				index: notes,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
