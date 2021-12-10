import React, { Component } from "react";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SearchBar />
			</div>
		);
	}
}
export default Home;
