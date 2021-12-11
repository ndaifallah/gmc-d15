import React, { Component } from "react";
import "antd/dist/antd.css";

import { Form, Input, Button, Checkbox } from "antd";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			E_mail: "",
			username: "",
			password: "",
		};
	}

	signup = async (user, password) => {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_name1: user,
				password1: password,
			}),
		};
		let response = await fetch("http://localhost:780/signup", options);
		console.log(response);
		if (response.status == 200) {
			this.props.history.push("/login", []);
		}
	};
	///////////////////////////////////////////////////////////
	// onFinish(values) {
	//   console.log("Success:", values);
	// }
	// onFinish(values) {
	//   console.log("Success:", values);
	// }
	////////////////////////////////////////////
	render() {
		return (
			<div
				style={{
					width: "100%",
					height: "100vh",
					padding: 20,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "auto",
					// position: "centre",
					//right: 0,
					//top: 0,
					// backgroundColor: "red",
				}}
			>
				<Form
					name="basic"
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="E_mail"
						name="your mail"
						style
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input
							style={{ width: 200 }}
							onChange={(e) => this.setState({ E_mail: e.target.value })}
							value={this.state.E_mail}
						/>
					</Form.Item>

					<Form.Item
						label="Username"
						name="username"
						style
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input
							style={{ width: 200 }}
							onChange={(e) => this.setState({ username: e.target.value })}
							value={this.state.username}
						/>
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password
							style={{ width: 200 }}
							onChange={(e) => this.setState({ password: e.target.value })}
							value={this.state.passwrod}
						/>
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Button
							type="primary"
							onClick={() =>
								this.signup(this.state.username, this.state.password)
							}
						>
							Sign Up
						</Button>
						<Button
							type="link"
							onClick={() => this.props.history.push("/login")}
						>
							Déja Membre
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default Signup;
