import React, { Component } from "react";
import { Button } from "antd";

class NavBar extends Component {
	render() {
		return (
			<div>
				<div
					className="navbar"
					style={{
						width: "100%",
						justifyContent: "flex-end",
						display: "flex",
					}}
				>
					<Button type="primary" style={{ width: 100, margin: 10 }}>
						SigIn
					</Button>
					<Button style={{ width: 100, margin: 10 }}>SignUp</Button>
				</div>
			</div>
		);
	}
}

export default NavBar;
