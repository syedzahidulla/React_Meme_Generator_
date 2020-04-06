import React from "react";
import "../style.css";
function FormComponent(props) {
	return (
		<div className="todo-list">
			<form>
				<br></br>
				<input
					name="firstName"
					value={props.data.firstName}
					placeholder="First Name"
					onChange={props.handleChange}
				/>
				<br></br>
				<input
					name="lastName"
					value={props.data.lastName}
					placeholder="Last Name"
					onChange={props.handleChange}
				/>
				<br></br>
				<input
					placeholder="Age"
					name="Age"
					value={props.data.Age}
					onChange={props.handleChange}
					required
				/>
				<br></br>
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={props.data.gender === "male"}
						onChange={props.handleChange}
					/>{" "}
					Male
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={props.data.gender === "female"}
						onChange={props.handleChange}
					/>{" "}
					Female
				</label>
				<br></br>
				<br></br>
				<select
					value={props.data.destination}
					name="destination"
					onChange={props.handleChange}
				>
					<option value="">---Please select destination---</option>
					<option value="India">India</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Afghanistan">Afghanistan</option>
					<option value="Iraq">Iraq</option>
				</select>
				<br></br>
				<br></br>
				<label>
					<input
						type="checkbox"
						name="isvegan"
						onChange={props.handleChange}
						checked={props.data.isvegan}
					></input>
				</label>{" "}
				IsVegan?
				<br></br>
				<label>
					<input
						type="checkbox"
						name="isnonvegan"
						onChange={props.handleChange}
						checked={props.data.isnonvegan}
					></input>
				</label>{" "}
				IsNonVegan?
				<br></br>
				<br />
				<button onClick={props.handleClick}>Submit</button>
			</form>
			<hr></hr>
			<h2>Entered Information:</h2>
			<p>
				Your Name:{props.data.firstName} {props.data.lastName}
			</p>
			<p>Your Age:{props.data.Age}</p>
			<p>Your Gender:{props.data.gender}</p>
			<p>Your Destination:{props.data.destination}</p>
			<p>
				Your Dietary Restrictions:
				<br></br>
				IsVegan:{props.data.isvegan ? "YES" : "NO"}
				<br></br>
				IsNonVegan:{props.data.isnonvegan ? "YES" : "NO"}
			</p>
			<br></br>
		</div>
	);
}
export default FormComponent;
