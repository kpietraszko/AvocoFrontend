import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Main from '../componentsStateless/main/Main'
import { connect } from 'react-redux';
import { actionCreators as authActionCreators} from '../actions/authenticationActions';
import { actionCreators as userActionCreators} from '../actions/userActions';
import { readToken } from '../services/tokenStorage';
import getDataFromToken from '../services/getDataFromToken';

class App extends Component {
	componentDidMount = () => {
		const token = readToken();
		if(token)
		{
			this.props.authorize(token);
			const data = getDataFromToken(token)
			this.props.saveTokenData(data);
		}
	}
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
const mapDispatchToProps = dispatch => ({
	authorize: (token) => dispatch(authActionCreators.authorize(token)),
	saveTokenData: (data) => dispatch(userActionCreators.saveTokenData(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); //withRouter wymagane przy Route render=...
