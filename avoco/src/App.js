import React, { Component } from 'react';
import classes from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Register from './register/Register.js';
import Login from './login/Login.js';
import { exampleAction } from "./store/actionCreators"; //test

class App extends Component {
	render() {
		console.log(exampleAction());
		return (
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
		);
	}
}

export default App;
