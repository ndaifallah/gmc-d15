import "./App.css";
import { Component } from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LoginContainer from "./containers/logincontainer";
import Checkoutcontainer from "./containers/checkoutcontainer";
import store from "./redux/store";
import Home from "./containers/home";
import Signup from "./components/signUp";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={LoginContainer} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/checkout" component={Checkoutcontainer} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
