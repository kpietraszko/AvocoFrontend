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
			<div className={styles.searchBar}>
				<input placeholder="Szukaj wydarzeń" onInput={props.handleSearchInput} />
				<div className={`material-icons ${styles.searchIcon} primaryColor`}>search</div>
			</div>
			<ul className={styles.eventList}>
				<Link to="/addEvent" id={styles.newEventButton} className={styles.whiteRounded}>
					<div className="material-icons">add_circle</div>
					Dodaj wydarzenie
				</Link>
				{props.events && props.events.map((event) => {
					return matchesSearch(event, props.searchString) && <li key={event.id} className={styles.event}>
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
				}

				)}
			</ul>
		</div>
	);
};
const matchesSearch = (event, searchString) => {
	if (!searchString || (searchString.length < 3 && isNaN(searchString))) {
		return true;
	}
	const searchStringLower = searchString.toLowerCase();
	const month = moment(event.eventDateTime).format("MMM");
	const dayOfMonth = moment(event.eventDateTime).format("DD");

	return event.eventName.toLowerCase().includes(searchStringLower) ||
		month == searchStringLower ||
		dayOfMonth == searchStringLower ||
		event.place.toLowerCase().includes(searchStringLower);
}


export default GroupEvents;