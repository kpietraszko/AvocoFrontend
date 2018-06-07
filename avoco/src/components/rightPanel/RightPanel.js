import React, { Component } from 'react';
import styles from './RightPanel.module.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventsApi } from '../../api/group';
import replaceDates from '../../services/replaceDates';
import replaceCoords from '../../services/replaceCoords';
import { getUsersEvents } from '../../api/event';
import { actionCreators } from '../../actions/homeActions';

class RightPanel extends Component {

	componentDidMount = () => {
		if (this.props.userId)
		{
			this.getEvents();
		}
	}
	
	getEvents = () => {
		console.log("getting events");
		getUsersEvents(this.props.userId)
			.then(response => {
					let events = response.data;
					replaceDates(events);
					replaceCoords(events);
					this.props.setEvents(events);
			})
	}
	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.userId != this.props.userId){
			this.getEvents();
		}
	}

	render() {
		return (
			<div id={styles.rightPanel}>
				<h2>Twoje wydarzenia</h2>
				<ul className={styles.eventList}>
					{this.props.events && this.props.events.map((event) =>
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
							<div className={styles.title}>{event.groupName}</div>
							<Link className={styles.title} to={`/event/${event.id}`}>{event.eventName}</Link>
						</li>
					)}

					{/* {this.props.events.length === 0 &&
						<p>Nie bierzesz udziału w żadnych wydarzeniach</p>
					} */}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	userId: state.user.userId,
	events: state.home.events
})
const mapDispatchToProps = dispatch => ({
	setEvents: events => dispatch(actionCreators.getAllEvents(events))
})
export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);