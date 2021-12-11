import React, { Component } from "react";
import { Button } from "antd";

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
			</div>
		);
	}
}
export default NavBarFalse;
