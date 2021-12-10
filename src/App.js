import "./App.css";
import { Component } from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import Home from "./containers/home";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
