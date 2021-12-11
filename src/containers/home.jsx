import React, { Component } from "react";
import NavBar from "../components/navBarTrue";
import SearchBar from "../components/searchBar";
import { MapStateToProps, connect } from "react-redux";
import NavBarFalse from "../components/navBarFalse";

class Home extends Component {
	render() {
		console.log(this.props);

		return (
			<div>
				{this.props.isLogged ? (
					<NavBar history={this.props.history} />
				) : (
					<NavBarFalse history={this.props.history} />
				)}

				<SearchBar />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	isLogged: state.logged,
});

export default connect(mapStateToProps, null)(Home);
