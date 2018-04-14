import React from 'react';
import styles from './Register.module.css';
import { Link, Redirect } from 'react-router-dom';
import Regions from '../../regions';
import { register } from '../../api/authentication'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		register(form)
			.then(() => {
				this.setState({ registered: true });
			});
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
							{Regions.map((region, i) =>
								<option value={i} key={i}>{region}</option>
							)}
						</select>
					</div>
					<input className={styles.form} type="email" name="Email" placeholder="E-mail" required />
					<input className={styles.form} type="password" name="Password" placeholder="Hasło" required minLength="6" />
					<input className={styles.form} type="password" name="RepPassword" placeholder="Powtórz hasło" required onInput={this.handleRepPassword} />
					<input type="submit" value="Załóż" />
				</form>
				<div id={styles.HaveAccount}>Mam już konto.
				<Link id={styles.LoginButton} to="/">Zaloguj</Link>
				</div>
				{this.state.registered && <Redirect to="/" />}
			</div>
		);
	}
}
export default Register;