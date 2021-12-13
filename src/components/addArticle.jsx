import React, { Component } from "react";
import { Card, Input, Cascader, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const genderOptions = [
	{
		value: "Homme",
		label: "Homme",
	},
	{
		value: "Femme",
		label: "Femme",
	},
];
const SizeOptions = [
	{
		value: "Small",
		label: "Small",
	},
	{
		value: "Medium",
		label: "Medium",
	},
	{
		value: "Large",
		label: "Large",
	},
	{
		value: "Extra large",
		label: "Extra large",
	},
];
class AddArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			price: 0,
			gender: "",
			size: "",
			fileList: [],
		};
	}

	sendArticle = async () => {
		try {
			let form = new FormData();
			form.append("image", this.state.fileList[0].originFileObj);
			form.append("itemname", this.state.name);
			form.append("description", this.state.description);
			form.append("gender", this.state.gender);
			form.append("size", this.state.size);
			form.append("price", this.state.price);

			let options = {
				method: "POST",
				headers: {
					AuthToken: JSON.parse(localStorage.getItem("TOKEN")),
				},
				body: form,
			};

			await fetch("http://localhost:780/additem", options);
			this.props.history.push("/sellerspace");
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<div
				style={{
					width: "500px",
					height: "350px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "15%",
					marginLeft: "30%",
					background: " rgba(255, 255, 255, 0.2)",
					borderRadius: " 16px",
					boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
					backdropFilter: "blur(5px)",
					webkitBackdropFilter: " blur(5px)",
					border: " 1px solid rgba(255, 255, 255, 0.3)",
				}}
			>
				<Card
					title="Publish new article"
					bordered={false}
					style={{ width: 500 }}
				>
					<h3>
						Please inter your article information by completing the list below.
					</h3>
					<Input
						placeholder="Name of the article"
						onChange={(event) => this.setState({ name: event.target.value })}
					/>
					<br />
					<br />
					<TextArea
						rows={4}
						placeholder="Description"
						onChange={(event) =>
							this.setState({ description: event.target.value })
						}
					/>
					<br />
					<br />
					<Cascader
						options={genderOptions}
						onChange={(value) => this.setState({ gender: value[0] })}
						placeholder="Gender"
					/>
					<br />
					<br />
					<Cascader
						options={SizeOptions}
						onChange={(value) => this.setState({ size: value[0] })}
						placeholder="Size"
					/>
					<br />
					<br />
					<Input
						placeholder="Price"
						onChange={(event) => this.setState({ price: event.target.value })}
					/>
					<br />
					<br />

					<Upload
						// action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						listType="picture"
						// defaultFileList={[...fileList]}
						onChange={({ fileList }) => {
							console.log(fileList);
							this.setState({ fileList });
						}}
					>
						<Button icon={<UploadOutlined />}>Upload</Button>
					</Upload>
					<br />
					<Button type="primary" onClick={this.sendArticle} block>
						Publish
					</Button>
				</Card>
			</div>
		);
	}
}
export default AddArticle;
