import React from 'react';
import styles from './GroupEvents.module.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const GroupEvents = (props) => {
	return (
		<div id={styles.groupEvents}>
			<h2>
				Wydarzenia
			</h2>
			<ul className={styles.eventList}>
				{props.events && props.events.map((event) => 
					<li key={event.id} className={styles.event}>
						<div className={styles.main}>
							<div className={styles.date}>
								<div className={styles.whiteRounded}>
									<div className="material-icons">event</div>
									{moment(event.eventDateTime).format("DD")}
									<div className={styles.dateDetails}>
										<div className={styles.month}>{moment(event.eventDateTime).format("MMM")}</div>
										<div className={styles.time}>{moment(event.eventDateTime).format("HH:mm")}</div>
									</div>
								</div>
							</div>
							<div className={styles.location}>
								<div className={styles.whiteRounded}>
									<div className={`material-icons ${styles.placeIcon}`}>place</div>
									{event.place}
							</div>
							</div>
						</div>
						<Link className={styles.title} to={`/event/${event.id}`}>{event.eventName}</Link>
					</li>
				)}
			</ul>
			<Link to="/addEvent" id={styles.newEventButton} className={styles.whiteRounded}>
				<div className="material-icons">add_circle</div>
				Dodaj wydarzenie
			</Link>
		</div>
	);
};

export default GroupEvents;