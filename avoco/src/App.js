import React, { Component } from 'react';
import classes from './App.module.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './register/Register.js';
import Login from './login/Login.js';
import actionCreators from "./store/actionCreators"; //test
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount(){
		this.props.onAuthorized();
	}
	render() {
		console.log(this.props);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
