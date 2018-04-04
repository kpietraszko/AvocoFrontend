import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div id={styles.Center}>
			<div id={styles.ToLeft}>
				<div id={styles.Logo}>AVOCO</div>
				<div id={styles.Register}>Załóż konto</div>
				<p>
					<div id={styles.LoginDesc}>i dołącz do setek ludzi<br></br>o wspólnych zainteresowaniach!</div>
				</p>
			</div>
			<form id={styles.FlexContainer_Login}>
				<input className={styles.form} name="Name" placeholder="Imię" required/>
				<input className={styles.form} name="Surname" placeholder="Nazwisko" required/>
				<div id={styles.ComboBackground}>
					<select id={styles.Combobox}>
						<option hidden>Województwo</option>
						<option value="1">Dolnośląskie</option>
						<option value="2">Kujawsko-pomorskie</option>
						<option value="3">Lubelskie</option>
						<option value="4">Lubuskie</option>
						<option value="5">Łódzkie</option>
						<option value="6">Małopolskie</option>
						<option value="7">Mazowieckie</option>
						<option value="8">Opolskie</option>
						<option value="9">Podkarpackie</option>
						<option value="10">Podlaskie</option>
						<option value="11">Pomorskie</option>
						<option value="12">Śląskie</option>
						<option value="13">Świętokrzyskie</option>
						<option value="14">Warmińsko-mazurskie</option>
						<option value="15">Wielkopolskie</option>
						<option value="16">Zachodniopomorskie</option>
					</select>
				</div>
				<input className={styles.form} type="email" name="Email" placeholder="E-mail" required/>
				<input className={styles.form} type="password" name="Password" placeholder="Hasło" required minLength="6"/>
				<input className={styles.form} type="password" name="Rep_Password" placeholder="Powtórz hasło" required/>
				<input type="submit" value="Załóż"/>
			</form>
			<div id={styles.HaveAccount}>Mam już konto.
				<Link id={styles.LoginButton} to="/login">Zaloguj</Link>
			</div>
		</div>
	);
}
export default Register;