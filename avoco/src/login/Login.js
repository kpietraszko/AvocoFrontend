import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <React.Fragment>
        <h3>This is login page</h3>
        <Link to="/">Go to /</Link>
        </React.Fragment>
    )
}
export default Login;