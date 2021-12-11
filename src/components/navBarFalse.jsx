import React, { Component } from "react";
import { Button } from "antd";
import { MapStateToProps, connect } from "react-redux";
class NavBarFalse extends Component {
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
					onClick={() => this.props.history.push("/")}
				>
					Profile
				</Button>
				<Button
					type="primary"
					style={{ width: 100, margin: 10 }}
					onClick={() => {
						localStorage.removeItem("TOKEN");
						this.props.history.push("/home");
						this.props.dispatch({
							type: "LOGOUT",
						});
					}}
				>
					Disconnect
				</Button>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	isLogged: state.logged,
});

export default connect(mapStateToProps, null)(NavBarFalse);
