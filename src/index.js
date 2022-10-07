import {ConnectedRouter} from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import history from "./utils/history";
import App from "./App";
import {configureStore} from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

const store = configureStore();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	</BrowserRouter>,
	document.querySelector("#root"),
);
serviceWorker.unregister();
