import React, { Component } from 'react';
import Spinner from '../../componentsStateless/spinner/Spinner';
import Modal from '../../componentsStateless/modal/Modal';
import styles from './Home.module.css';

class Home extends Component {
	state = { modal: true}
	render() {
		return (
			<div id={styles.container}>
				{/* <Spinner size={40} /> */}
			</div>
		);
	}
}

export default Home;