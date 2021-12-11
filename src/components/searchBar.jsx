import React, { Component } from "react";
import { Input, Cascader, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

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
	render() {
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
					<Cascader options={genderOptions} placeholder="Gender" />
					<Cascader options={SizeOptions} placeholder="Size" />
					<Cascader options={vendorOptions} placeholder="Vendor" />
				</div>

				<Search
					placeholder="input search text"
					allowClear
					onSearch={() => console.log("hey")}
					style={{ width: 300, marginRight: 10 }}
				/>
			</div>
		);
	}
}

export default SearchBar;
