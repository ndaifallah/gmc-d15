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
const vendorOptions = [
	{
		value: "Mokrane",
		label: "Mokrane",
	},
	{
		value: "Mbarek",
		label: "Mbarek",
	},
	{
		value: "Said",
		label: "Said",
	},
];

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "",
			size: "",
			vendor: "",
		};
	}
	getItem = async (options) => {
		fetch("http://192.168.1.1", options);
	};

	render() {
		let options = {
			gender: this.state.gender,
			size: this.state.size,
			vendor: this.props.vendor,
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
						width: "45%",
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
					<Cascader
						options={vendorOptions}
						placeholder="Vendor"
						onChange={(value) => this.setState({ vendor: value[0] })}
					/>
				</div>

				<Search
					placeholder="input search text"
					allowClear
					onSearch={() => {
						this.getItem(options);
						console.log(options);
					}}
					style={{ width: 300, marginRight: 10 }}
				/>
			</div>
		);
	}
}

export default SearchBar;
