import React, { Component } from 'react';
import styles from './Event.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Person from '../../componentsStateless/person/Person';
import { getDetailsApi, getInterestedUsersApi, getGroupImageApi, setInterestedApi, getEventCommentsApi, addCommentApi } from '../../api/event';
import { getUsersEvents } from '../../api/event';
import { actionCreators as eventActionCreators } from '../../actions/eventActions';
import { actionCreators as homeActionCreators } from '../../actions/homeActions';
import base64ToImageUrl from '../../services/base64ToImageUrl';
import Modal from '../../componentsStateless/modal/Modal';

class Event extends Component {
	state = {
		showInterestedModal: false
	}

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

		if (this.props.match.params.eventId) {
			this.getInterestedUsers();
			this.getComments();
		}

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
	getComments = () => {
		getEventCommentsApi(this.props.match.params.eventId)
			.then(response => this.transformAndSetComments(response.data))
			.catch(error => alert(error));
	}
	handleInterestedClick = (interested) => {
		setInterestedApi(this.props.match.params.eventId, interested)
			.then(() => {
				this.getInterestedUsers();
				this.getEvents();
			})
			.catch(error => console.log(error));
	}
	handleNewComment = (e) => {
		e.preventDefault();
		const newComment = e.target.newCommentInput.value;
		addCommentApi(this.props.match.params.eventId, newComment)
			.then(response => this.transformAndSetComments(response.data))
			.catch(error => alert(error));
	}
	transformAndSetComments = (comments) => {
		for (let comment of comments) {
			comment.image = base64ToImageUrl(comment.image);
		}
		this.props.setEventComments(comments);
	}
	getEvents = () => { //do prawego panelu
		console.log("getting events");
		getUsersEvents(this.props.userId)
			.then(response => {
				let events = response.data;
				this.props.setEvents(events);
			})
	}
	render() {
		return (
			<React.Fragment>
				{this.props.event.interestedUsers.map(user => user.id).includes(this.props.userId) ?
					this.state.showInterestedModal && <Modal question="Czy na pewno nie jesteś zainteresowany tym wydarzeniem?"
						confirm={() => this.handleInterestedClick(false)}
						cancel={() => this.setState({ showInterestedModal: false })} /> :
					this.state.showInterestedModal && <Modal question="Czy na pewno jesteś zainteresowany tym wydarzeniem?"
						confirm={() => this.handleInterestedClick(true)}
						cancel={() => this.setState({ showInterestedModal: false })} />
				}
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
							<div id={styles.interestedButton} onClick={() => this.setState({ showInterestedModal: true })}> {/* () => this.handleInterestedClick(false)}> */}
								<div className={`material-icons ${styles.symbolCircle}`}>star</div>
								<div id={styles.interestedButtonText} className="whiteRounded">
									Niezainteresowany
							</div>
							</div> :
							<div id={styles.interestedButton} onClick={() => this.setState({ showInterestedModal: true })}>
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
						<h2>Komentarze</h2>
						{this.props.event && this.props.event.comments && this.props.event.comments.map(comment =>
							<div key={comment.id} className={`${styles.comment} whiteRounded`}>
								<Person userId={comment.userId} firstName={comment.firstName} lastName={comment.lastName} photoUrl={comment.image} />
								<span>{comment.content}</span>
							</div>
						)}
						<form onSubmit={this.handleNewComment}>
							<textarea className={styles.newComment} name="newCommentInput" rows={1} placeholder="Napisz komentarz..." />
							<input className={styles.commentSubmit} type="submit" value="Wyślij" />
						</form>
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
	setEventDetails: eventDetails => dispatch(eventActionCreators.setEventDetails(eventDetails)),
	setInterestedUsers: interestedUsers => dispatch(eventActionCreators.setInterestedUsers(interestedUsers)),
	setEventGroupImage: groupImage => dispatch(eventActionCreators.setEventGroupImage(groupImage)),
	setEventComments: comments => dispatch(eventActionCreators.setEventComments(comments)),
	setEvents: events => dispatch(homeActionCreators.getAllEvents(events)) //prawy panel
});
export default connect(mapStateToProps, mapDispatchToProps)(Event);