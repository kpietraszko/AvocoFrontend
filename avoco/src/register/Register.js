import React from 'react';
import styles from './Register.module.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const region = form.Region.value === "Województwo" ?
			"" : form.Region[form.Region.value].text;
		const registrationData = {
			FirstName: form.Name.value,
			LastName: form.Surname.value,
			Region: region,
			EmailAddress: form.Email.value,
			Password: form.Password.value,
			ConfirmPassword: form.RepPassword.value
		}
		console.log("Posting", registrationData);
		axios.post("/user/register", registrationData)
			.then((response) => {
				console.log(response);
				this.setState({registered: true});
			}).catch((error) => {
				console.log(error);
			});
		// for (let i of event.target)
		// 	console.log({[i.name]: i.value});
	}
	handleRepPassword = (event) => {
		const form = event.target.form;
		const validationMessage = form.RepPassword.value !== form.Password.value ?
			"Podane hasła różnią się" : ""; //pusty string oznacza że pole przeszło walidację
		event.target.setCustomValidity(validationMessage);
	}
	render = () => {
		return (
			<div id={styles.Center}>
				<div id={styles.ToLeft}>
					<div id={styles.Logo}>AVOCO</div>
					<div id={styles.Register}>Załóż konto</div>
					<p>
						<span id={styles.LoginDesc}>i dołącz do setek ludzi<br />o wspólnych zainteresowaniach!</span>
					</p>
				</div>
				<form id={styles.FlexContainer_Login} onSubmit={this.handleSubmit}>
					<input className={styles.form} name="Name" placeholder="Imię" required />
					<input className={styles.form} name="Surname" placeholder="Nazwisko" required />
					<div id={styles.ComboBackground}>
						<select id={styles.Combobox} name="Region">
							<option hidden>Województwo</option>
							<option value="1">dolnośląskie</option>
							<option value="2">kujawsko-pomorskie</option>
							<option value="3">lubelskie</option>
							<option value="4">lubuskie</option>
							<option value="5">łódzkie</option>
							<option value="6">małopolskie</option>
							<option value="7">mazowieckie</option>
							<option value="8">opolskie</option>
							<option value="9">podkarpackie</option>
							<option value="10">podlaskie</option>
							<option value="11">pomorskie</option>
							<option value="12">śląskie</option>
							<option value="13">świętokrzyskie</option>
							<option value="14">warmińsko-mazurskie</option>
							<option value="15">wielkopolskie</option>
							<option value="16">zachodniopomorskie</option>
						</select>
					</div>
					<input className={styles.form} type="email" name="Email" placeholder="E-mail" required />
					<input className={styles.form} type="password" name="Password" placeholder="Hasło" required minLength="6" />
					<input className={styles.form} type="password" name="RepPassword" placeholder="Powtórz hasło" required onInput={this.handleRepPassword} />
					<input type="submit" value="Załóż" />
				</form>
				<div id={styles.HaveAccount}>Mam już konto.
				<Link id={styles.LoginButton} to="/login">Zaloguj</Link>
				</div>
				{this.state.registered && <Redirect to="/"/>}
			</div>
		);
	}
}
export default Register;