import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { MapStateToProps, connect } from "react-redux";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
		};
	}

	loginfunction = async (username, password) => {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_name: username,
				password: password,
			}),
		};
	};
	logInFunction = async (username, password) => {
		let options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_name: username,
				password: password,
			}),
		};
		let response = await fetch("http://localhost:780/login", options);
		console.log(response);
		let data = await response.json();
		console.log(data);
		localStorage.setItem("TOKEN", JSON.stringify(data.token));
		if (response.status == 200) {
			this.props.dispatch({
				type: "LOGIN",
			});
			this.props.history.push("/", []);
		}
	};

	render() {
		const onFinish = (values) => {
			console.log("Success:", values);
			console.log("TEST TEST TEST");
			this.loginfunction(this.state.username, this.state.password);
		};

		const onFinishFailed = (errorInfo) => {
			console.log("Failed:", errorInfo);
		};

		return (
			<div
				style={{
					marginRight: "2rem",
					marginTop: "2rem",
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
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						onChange={(e) => this.setState({ username: e.target.value })}
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						onChange={(e) => this.setState({ password: e.target.value })}
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
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
								this.logInFunction(this.state.username, this.state.password)
							}
						>
							Log In
						</Button>
						<Button
							type="link"
							onClick={() => this.props.history.push("/home")}
						>
							I dont have an account
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	//return state
});

export default connect(mapStateToProps, null)(Login);
