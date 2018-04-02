import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        //<React.Fragment>
        //<h3>This is login page</h3>
        //<Link to="/">Go to /</Link>
       // </React.Fragment>
        <div id="Center">
            <div id="ToLeft">
                <div id="Logo">AVOCO</div>
                <div id="Login">Zaloguj się</div>
                <p>
                    <div id="LoginDesc">i dołącz do setek ludzi<br></br>o wspólnych zainteresowaniach!</div>
                </p>
         </div>
                <form id="FlexContainer_Login">
                    <input className={styles.form} name="Email" placeholder="E-mail" />
                    <input className={styles.form} name="Password" placeholder="Hasło" />
                    <a id="loginButton" href="home.html">Zaloguj</a>
                </form>
            <div id="No_Account">Nie masz konta?
            <a id="signUpLink" href="index.html">Zarejestruj się</a>
            </div>
        </div>
    )
}
export default Login;
