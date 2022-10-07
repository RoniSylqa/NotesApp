import {all} from "redux-saga/effects";
import {watcher as word} from "./app/notes";
export default function* root() {
	yield all([word()]);
}
