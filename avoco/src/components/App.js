import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Register from './register/Register.js';
import Login from './login/Login.js';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/register" component={Register} />
				{/* <Route exact path="/login" component={Login} /> */}
				<Route render={() => 
					this.props.isAuthorized ? <h1>Home page</h1> :
					<Login/>
				}/>
			</Switch>
		);
	}
}
const mapStateToProps = state => ({
	isAuthorized: state.isAuthorized
});

export default withRouter(connect(mapStateToProps)(App)); //withRouter wymagane przy Route render=...
