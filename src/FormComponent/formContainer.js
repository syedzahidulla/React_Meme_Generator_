import React, { Component } from "react";
import "../style.css";
import FormComponent from "./formComponent";
class Form extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			Age: "",
			gender: "",
			destination: "",
			isvegan: false,
			isnonvegan: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	}
	handleClick(event) {
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<FormComponent
				handleChange={this.handleChange}
				data={this.state}
				handleClick={this.handleClick}
			/>
		);
	}
}
export default Form;
