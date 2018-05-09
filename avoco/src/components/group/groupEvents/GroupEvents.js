import React from 'react';
import styles from './GroupEvents.module.css';

const GroupEvents = () => {
	return (

		<div id={styles.groupEvents}>
			<h2>
				Wydarzenia
		</h2>
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
						<div className={styles.location}>
							<div className={styles.whiteRounded}>
								<div className={`material-icons ${styles.placeIcon}`}>place</div>
								Olsztyn
							</div>
						</div>
					</div>
					<a className={styles.title} href="event.html">ASG w terenie</a>
				</li>
			</ul>
			<a href="addEvent.html" id={styles.newEventButton} className={styles.whiteRounded}>
				<div className="material-icons">add_circle</div>
				Dodaj wydarzenie
					</a>
		</div>
	);
};

export default GroupEvents;