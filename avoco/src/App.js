import React, { Component } from 'react';
import classes from './App.module.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Register from './register/Register.js';
import Login from './login/Login.js';
import actionCreators from "./store/actionCreators"; //test
import { connect } from 'react-redux';

class App extends Component {
	constructor(props){
		super(props);
		this.props.onAuthorized(); //HACK
	}
	render() {
		return (
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route render={() => 
					this.props.isAuthorized ? <h1>Home page</h1> :
					<Redirect to="/login"/> 
				}/>
			</Switch>
		);
	}
}
const mapStateToProps = state => ({
	isAuthorized: state.isAuthorized
});
const mapDispatchToProps = dispatch => ({
	onAuthorized: () => dispatch(actionCreators.authorize())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); //withRouter wymagane przy Route render=...
