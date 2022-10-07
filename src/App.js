import React from "react";
import "./App.scss";
import {withRouter} from "react-router";
import Layout from "@components/Layout";

const App = () => (
	<div className="app">
		<Layout />
	</div>
);

export default withRouter(App);
