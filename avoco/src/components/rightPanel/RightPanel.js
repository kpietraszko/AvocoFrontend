import React, { Component } from 'react';
import styles from './RightPanel.module.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
// import { getGroupInfoApi, getGroupInterestsApi, getGroupImageApi } from '../../api/group';
// import { actionCreators as groupActionCreators } from '../../actions/groupActions';
// import { actionCreators as userActionCreators } from '../../actions/userActions';
// import { connect } from 'react-redux';
// import { newPostApi, getPostsApi, newCommentApi, userInGroupApi, joinGroupApi, leaveGroupApi, getEventsApi, deletePostApi, deleteCommentApi } from '../../api/group';
// import replaceImagesWithUrls from '../../services/replaceImagesWithUrls';
// import replaceDates from '../../services/replaceDates';
// import replaceCoords from '../../services/replaceCoords';
// import Modal from '../../componentsStateless/modal/Modal';
// zmienic jak bedzie api i chuj
// TODO

// componentDidMount = () => {
// 	this.getEvents();
// }

// getEvents = () => {
// 	console.log("getting events");
// 	const groupId = this.props.match.params.groupId;
// 	getEventsApi(groupId)
// 		.then((response) => {
// 			if (this.props.match.params.groupId === groupId) {
// 				let events = response.data;
// 				replaceDates(events);
// 				replaceCoords(events);
// 				this.props.setGroupEvents(events);
// 			}
// 		})
// }


class RightPanel extends Component {
	render() {
		return (
			<div id={styles.rightPanel}>
				{/* <h2>Twoje wydarzenia</h2>

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
							<Link className={styles.title} to={`/event/${event.id}`}>{event.eventName}</Link>
						</li>
					)}

					{this.props.events.length === 0 &&
						<p>Nie bierzesz udziału w żadnych wydarzeniach</p>
					}
				</ul> */}
			</div>
		);
	}
}

export default RightPanel;