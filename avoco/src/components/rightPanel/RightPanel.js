import React, { Component } from 'react';
import styles from './RightPanel.module.css';

class RightPanel extends Component {
	render() {
		return (
			<div id={styles.rightPanel}>
				<h2>Twoje wydarzenia</h2>
				<ul className={styles.eventList}>
					{/* <li className={styles.event}>
						<div className={styles.main}>
							<div className={styles.date}>
								<div className={styles.whiteRounded}>
									<div className="material-icons">event</div>
									16
                                <div className={styles.dateDetails}>
										<div className={styles.month}>MAR</div>
										<div className={styles.time}>12:00</div>
									</div>
								</div>
							</div>
							<div className={styles.groupName}>
								<a>
									<div className={styles.whiteRounded}>Fotografowie z Olsztyna</div>
								</a>
							</div>
							<div className={styles.location}>
								<div className={styles.whiteRounded}>
									<div className="material-icons">place</div>Olsztyn</div>
							</div>
						</div>
						<a className={styles.title}>Zlot miłośników krajobrazów</a>
					</li> */}
				</ul>
			</div>
		);
	}
}

export default RightPanel;