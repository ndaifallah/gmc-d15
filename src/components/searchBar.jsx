import React, { Component } from "react";
import { Input, Cascader, Space } from "antd";

const { Search } = Input;

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
		value: "Extra small",
		label: "Extra small",
	},
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

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "",
			size: "",
		};
	}
	getItem = async (options) => {
		let data = await fetch("http://localhost:780/getitems", options);
		let resp = await data.json();
		console.log(resp);
	};

	render() {
		let options = {
			gender: this.state.gender,
			size: this.state.size,
		};

		return (
			<div
				style={{
					width: "100%",
					height: "3rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div
					style={{
						width: "30%",
						height: "3rem",
						margin: 10,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Cascader
						options={genderOptions}
						placeholder="Gender"
						onChange={(value) => this.setState({ gender: value[0] })}
					/>
					<Cascader
						options={SizeOptions}
						placeholder="Size"
						onChange={(value) => this.setState({ size: value[0] })}
					/>
				</div>

				<Search
					placeholder="input search text"
					allowClear
					onSearch={() => {
						this.getItem(options);
					}}
					style={{ width: 300, marginRight: 10 }}
				/>
			</div>
		);
	}
}

export default SearchBar;
