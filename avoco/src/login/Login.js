import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id={styles.center}>
            <div id={styles.toLeft}>
                <div id={styles.logo}>AVOCO</div>
                <div id={styles.login}>Zaloguj się</div>
            </div>
                <form id={styles.flexContainer_Login}>
                    <input className={styles.form} type="email" name="Email" placeholder="E-mail" required/>
                    <input className={styles.form} type="password" name="Password" placeholder="Hasło" required/>
                    <input type="submit" value="Zaloguj"/>
                </form>
            <div id={styles.no_Account}>Nie masz konta?
            <Link id={styles.signUpLink} to="/register">Zarejestruj się</Link>
            </div>
        </div>
    )
}
export default Login;
