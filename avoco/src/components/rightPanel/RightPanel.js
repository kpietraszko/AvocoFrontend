import React, { Component } from 'react';
import styles from './RightPanel.module.css';

class RightPanel extends Component {
	render() {
		return (
			<div id={styles.rightPanel}>
				<h2>Twoje wydarzenia</h2>
				<ul className={styles.eventList}>
					<li className={styles.event}>
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
							<div className={styles.interested}>
								<div>
									<div>Zainteresowani:</div>
									<ul className={styles.interestedList}>
										<a href="profile.html">
											<li title="Michał Bosy" className="material-icons symbolCircle">person</li>
										</a>
										<a href="profile.html">
											<li title="Marek Kupczyk" className="material-icons symbolCircle">person</li>
										</a>
										<a href="profile.html">
											<li title="Janusz Fotograf" className="material-icons symbolCircle">person</li>
										</a>
										<span>+4</span>
									</ul>
								</div>
							</div>
							<div className={styles.groupName}>
								<a href="group.html">
									<div className={styles.whiteRounded}>Fotografowie z Olsztyna</div>
								</a>
							</div>
							<div className={styles.location}>
								<div className={styles.whiteRounded}>
									<div className="material-icons">place</div>Olsztyn</div>
							</div>
						</div>
						<a className={styles.title} href="event.html">Zlot miłośników krajobrazów</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default RightPanel;