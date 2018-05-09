import React from 'react';
import styles from './GroupEvents.module.css';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

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
								{moment().format("MM")}
										<div className={styles.dateDetails}>
									<div className={styles.month}>{moment().format("MMM")}</div>
									<div className={styles.time}>{moment().format("HH:mm")}</div>
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
					<Link className={styles.title} to="/event/:eventId">MOK</Link> 
				</li>
			</ul>
			<a href="addEvent.html" id={styles.newEventButton} className={styles.whiteRounded}>
				<div className="material-icons">add_circle</div>
				<Link to="/addEvent">Dodaj wydarzenie</Link>
			</a>
		</div>
	);
};

export default GroupEvents;