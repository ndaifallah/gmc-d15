import React, { Component } from "react";
import Login from "../components/logIn";

class LoginContainer extends Component {
	render() {
		return (
			<div
				style={{
					width: "350px",
					height: "350px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "10%",
					marginLeft: "35%",
					background: " rgba(255, 255, 255, 0.2)",
					borderRadius: " 16px",
					boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
					backdropFilter: "blur(5px)",
					webkitBackdropFilter: " blur(5px)",
					border: " 1px solid rgba(255, 255, 255, 0.3)",
				}}
			>
				<Login history={this.props.history}></Login>
			</div>
		);
	}
}

export default LoginContainer;
