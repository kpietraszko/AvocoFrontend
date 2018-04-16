import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Main from '../componentsStateless/main/Main'
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route render={() => 
					this.props.isAuthorized ? <Main/> :
					<Login/>
				}/>
			</Switch>
		);
	}
}
const mapStateToProps = state => ({
	isAuthorized: state.authentication.isAuthorized
});

export default withRouter(connect(mapStateToProps)(App)); //withRouter wymagane przy Route render=...
