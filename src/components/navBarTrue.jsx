import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { MapStateToProps, Provider } from "react-redux";

class NavBarTrue extends Component {
	render() {
		return (
			<div
				className="navbar"
				style={{
					width: "100%",
					justifyContent: "flex-end",
					display: "flex",
				}}
			>
				<Button
					type="primary"
					style={{ width: 100, margin: 10 }}
					onClick={() => this.props.history.push("/login")}
				>
					LogIn
				</Button>
				<Button
					style={{ width: 100, margin: 10 }}
					onClick={() => this.props.history.push("/signup")}
				>
					SignUp
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogged: state.logged,
});

export default NavBarTrue;
