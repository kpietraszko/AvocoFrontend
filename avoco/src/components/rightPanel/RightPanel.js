import React, { Component } from 'react';
import styles from './RightPanel.module.css';

class RightPanel extends Component {

	render() {
		return (
			<div id={styles.rightPanel}>
				<h2>Twoje wydarzenia</h2>
				<ul className={styles.eventList}>

				</ul>
			</div>
		);
	}
}

export default RightPanel;