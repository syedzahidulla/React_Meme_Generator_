import React, { Component } from "react";
import "./style.css";
import Header from "./MemeGeneratorComp/Header";
import MemeGenerator from "./MemeGeneratorComp/MemeGenerator"
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MemeGenerator />
			</div>
		);
	}
}
export default App;
