import React, { Component } from 'react';
import styles from './Event.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Person from '../../componentsStateless/person/Person';
import { getDetailsApi, getInterestedUsersApi, getGroupImageApi, setInterestedApi } from '../../api/event';
import { actionCreators } from '../../actions/eventActions';
import base64ToImageUrl from '../../services/base64ToImageUrl';

class Event extends Component {
	componentDidMount = () => {
		const eventId = this.props.match.params.eventId;
		getDetailsApi(eventId)
			.then(response => {
				console.log(response.data);
				this.props.setEventDetails(response.data);
				//get comments
			})
			.catch(error => alert(error));
		getGroupImageApi(eventId)
			.then(response => {
				this.props.setEventGroupImage(base64ToImageUrl(response.data));
			})
			.catch(error => console.log(error))

		getInterestedUsersApi();

	}
	getInterestedUsers = () => {
		getInterestedUsersApi(this.props.match.params.eventId)
			.then(response => {
				const users = response.data;
				for (let user of users) {
					user.image = base64ToImageUrl(user.image);
				}
				this.props.setInterestedUsers(users);
			}
			)
	}
	handleInterestedClick = (interested) => {
		setInterestedApi(this.props.match.params.eventId, interested)
			.then(response => this.getInterestedUsers())
			.catch(error => console.log(error));
	}
	render() {
		return (
			<React.Fragment>
				<div id={styles.topPanel}>
					<div className={styles.main}>
						<div id={styles.groupCover} className={this.props.event.groupImage ? styles.groupCoverImage : styles.groupCoverEmpty}
							style={{ backgroundImage: `url(${this.props.event.groupImage})` }}>
							<h1>{this.props.event.groupName}</h1>
						</div>
						<div id={styles.groupInterests}>
							<h2>Zainteresowani</h2>
							<ul>
								<li className={styles.person}> {/* mozliwe ze usunac tu klase */}
									{this.props.event.interestedUsers && this.props.event.interestedUsers.map(user =>
										<Person key={user.id} userId={user.Id} firstName={user.firstName} lastName={user.lastName} photoUrl={user.image} background />
									)}
								</li>
							</ul>
						</div>
					</div>
					<div className={`title ${styles.title}`}>
						<div className={styles.eventName}>
							<span>Wydarzenie:</span> {this.props.event.eventName}
						</div>
						{this.props.event.interestedUsers.map(user => user.id).includes(this.props.userId) ?
							<div id={styles.interestedButton} onClick={() => this.handleInterestedClick(false)}>
								<div className={`material-icons ${styles.symbolCircle}`}>star</div>
								<div id={styles.interestedButtonText} className="whiteRounded">
									Niezainteresowany
							</div>
							</div> :
							<div id={styles.interestedButton} onClick={() => this.handleInterestedClick(true)}>
								<div className={`material-icons ${styles.symbolCircle}`}>star_border</div>
								<div id={styles.interestedButtonText} className="whiteRounded">
									Zainteresowany
						</div>
							</div>}
					</div>
				</div>
				<div id={styles.eventInfo}>
					<div id={styles.dateAndDescription}>
						<div className={styles.date}>
							<div className={`${styles.dateText} whiteRounded`}>
								<div className="material-icons">event</div>
								16
							<div className={styles.dateDetails}>
									<div className={styles.month}>MAR</div>
									<div className={styles.time}>12:00</div>
								</div>
							</div>
						</div>
						<div className="whiteRounded" id={styles.description}>
							{this.props.event.eventDescription || <i>Brak opisu</i>}
						</div>
					</div>
					<div id={styles.map}>
						{this.props.event.eventLocationLat &&
							<iframe frameBorder="0" style={{ border: 0 }}
								src={`https://www.google.com/maps/embed/v1/place?q=${this.props.event.eventLocationLat},${this.props.event.eventLocationLng}&key=AIzaSyAe_x-NCWFqmMdoudhr8pBb7QhJo8p0y9s`}
								allowFullscreen></iframe>}
					</div>
					<div id={styles.comments}>
						<h2>Komentarze
						<div className={`${styles.addCommentIcon} material-icons`}>insert_comment</div>
						</h2>
						<div className={`${styles.comment} whiteRounded`}>
							<Person />
							<span>Duis in quam a augue viverra.</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	event: state.event,
	userId: state.user.userId
});
const mapDispatchToProps = dispatch => ({
	setEventDetails: eventDetails => dispatch(actionCreators.setEventDetails(eventDetails)),
	setInterestedUsers: interestedUsers => dispatch(actionCreators.setInterestedUsers(interestedUsers)),
	setEventGroupImage: groupImage => dispatch(actionCreators.setEventGroupImage(groupImage))
});
export default connect(mapStateToProps, mapDispatchToProps)(Event);