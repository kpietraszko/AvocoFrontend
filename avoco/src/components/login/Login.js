import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators as authActionCreators} from '../../actions/authenticationActions';
import { actionCreators as userActionCreators} from '../../actions/userActions';
import { login } from '../../api/authentication';
import getDataFromToken from '../../services/getDataFromToken';
import setAuthorizationHeader from '../../services/setAuthorizationHeader';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: "" };
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		login(form)
			.then((response) => {
				const token = response.data.token;
				setAuthorizationHeader(token);
				this.props.authorize(token);
				const data = getDataFromToken(token)
				this.props.saveTokenData(data);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 401)
					this.setState({ error: "Nieprawidłowe dane logowania" });
				else if (error.request)
					this.setState({ error: "Serwer nie odpowiada" });
			});
	}
	render = () => {
		return (
			<div id={styles.center}>
				<div id={styles.toLeft}>
					<div id={styles.logo}>AVOCO</div>
					<div id={styles.login}>Zaloguj się</div>
				</div>
				<form id={styles.flexContainer_Login} onSubmit={this.handleSubmit}>
					<input className={styles.form} type="email" name="Email" placeholder="E-mail" required />
					<input className={styles.form} type="password" name="Password" placeholder="Hasło" required />
					<input type="submit" value="Zaloguj" />
				</form>
				<div id={styles.error}>
					{this.state.error}
				</div>
				<div id={styles.no_Account}>Nie masz konta?
           			<Link id={styles.signUpLink} to="/register">Zarejestruj się</Link>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	authorize: (token) => dispatch(authActionCreators.authorize(token)),
	saveTokenData: (data) => dispatch(userActionCreators.saveTokenData(data))
});
export default connect(null, mapDispatchToProps)(Login);
