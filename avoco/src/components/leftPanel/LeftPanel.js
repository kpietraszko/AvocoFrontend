import React, { Component } from 'react';
import styles from './LeftPanel.module.css';
import Person from '../person/Person';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends, getGroups } from '../../api/user';
import { actionCreators } from '../../actions/userActions';
import getUsersPhotos from '../../services/getUsersPhotos';

class LeftPanel extends Component {
	componentDidMount = () => {
		this.getFriends();
	}
	getFriends = () => {
		console.log("getting friends");
		getFriends()
			.then((response) => {
				this.props.updateFriends(response.data)
				getUsersPhotos(response.data, this.props.setFriendPhoto);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	getGroups = () => {
		getGroups()
			.then((response) => {
				this.setState({ groups: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div id={styles.leftPanel}>
				<h2>Twoi znajomi</h2>
				<ul id="friendsList">
					{this.props.friends && this.props.friends.map((friend) =>
						<li key={friend.Id}>
							<Person key={friend.Id} userId={friend.Id} firstName={friend.firstName} lastName={friend.lastName}
								photoUrl={friend.photoUrl} background></Person>
						</li>
					)}
					{this.props.friends.length === 0 &&
						<p>Nie masz znajomych ☹️</p>
					}
				</ul>
				<hr />
				<h2>Twoje grupy</h2>
				<ul id="groupsList">
					{this.props.groups && this.props.groups.map((group) =>
						<li key={group.groupId} className={styles.group}>
							<Link to="/group">{group.groupName}</Link>
						</li>
					)}
					{this.props.groups.length === 0 &&
						<p>Nie jesteś w żadnej grupie</p>
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	userId: state.user.userId,
	friends: state.user.friends,
	groups: state.user.groups
});
const mapDispatchToProps = (dispatch) => ({
	updateFriends: (friends) => dispatch(actionCreators.updateFriends(friends)),
	setFriendPhoto: (userId, photoUrl) => dispatch(actionCreators.setFriendPhoto(userId, photoUrl))
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);