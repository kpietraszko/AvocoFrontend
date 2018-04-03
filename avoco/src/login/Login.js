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
                    <input className={styles.form} name="Email" placeholder="E-mail" />
                    <input className={styles.form} name="Password" placeholder="Hasło" />
                    <a id={styles.loginButton} href="home.html">Zaloguj</a>
                </form>
            <div id={styles.no_Account}>Nie masz konta?
            <a id={styles.signUpLink} href="register.html">Zarejestruj się</a>
            </div>
        </div>
    )
}
export default Login;
