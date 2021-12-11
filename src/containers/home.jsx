import React, { Component } from "react";
import NavBar from "../components/navBarTrue";
import SearchBar from "../components/searchBar";
import { MapStateToProps, connect } from "react-redux";
import NavBarFalse from "../components/navBarFalse";
import { Drawer, Button } from "antd";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	showDrawer = () => {
		this.setState({ visible: true });
	};
	onClose = () => {
		this.setState({ visible: false });
	};
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
				<Button
					type="primary"
					style={{ position: "fixed", left: 16, bottom: 16 }}
					onClick={this.showDrawer}
				>
					Cart
				</Button>
				<Drawer
					title="Basic Drawer"
					placement="right"
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<p>Siuuuuuuuuuuu</p>
					<p>Siuuuuuuuuuuu</p>
					<p>Siuuuuuuuuuuu</p>
				</Drawer>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	isLogged: state.logged,
});

export default connect(mapStateToProps, null)(Home);
