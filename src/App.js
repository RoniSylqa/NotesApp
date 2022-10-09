import React from "react";
import "./App.scss";
import {withRouter} from "react-router";
import Layout from "@components/Layout";
import {Toaster} from "react-hot-toast";
const App = () => (
	<div className="app">
		<Layout />
		<Toaster
			toastOptions={{
				className: "toaster",
			}}
			position="top-right"
			reverseOrder={false}
		/>
	</div>
);

export default withRouter(App);
