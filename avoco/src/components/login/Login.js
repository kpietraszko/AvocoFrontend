import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import actionCreators from '../../store/actionCreators'
import Redirect from 'react-router-dom/Redirect';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {enteredWrongCred: false, loggedIn: false};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const loginData = {
			Email: form.Email.value,
			Password: form.Password.value
		};
		axios.post("/authentication/login", loginData)
			.then((response) => {
				console.log("Response", response.data.token);
				this.setState({enteredWrongCred: false, loggedIn: true});
				this.props.authorize(response.data.token);
			})
			.catch((error) => {
				console.log("Error", error.response);
				if (error.response.status === 401)
					this.setState({enteredWrongCred: true});
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
				{/*true && wyrazenie zwraca wyrazenie, false && wyrazenie zwraca false*/}
				{ this.state.enteredWrongCred &&
					<div id={styles.error}>
						Nieprawidłowe dane logowania
					</div>
				}
				<div id={styles.no_Account}>Nie masz konta?
           			<Link id={styles.signUpLink} to="/register">Zarejestruj się</Link>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	authorize: (token) => dispatch(actionCreators.authorize(token))
});
export default connect(null, mapDispatchToProps)(Login);
