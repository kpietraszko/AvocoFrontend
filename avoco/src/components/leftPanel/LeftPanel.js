import React, { Component } from 'react';
import styles from './LeftPanel.module.css';
import Person from '../../componentsStateless/person/Person';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends, getGroups } from '../../api/user';
import { actionCreators } from '../../actions/userActions';
import getUsersPhotos from '../../services/getUsersPhotos';
import initializeApi from '../../api/initialize';

class LeftPanel extends Component {
	componentDidMount = () => {
		initializeApi();
		this.getFriends();
		this.getGroups();
	}
	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if(this.props.userId && this.props.userId !== prevProps.userId)
		{
			this.getGroups();
		}
	}
	getFriends = () => {
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
		if (this.props.userId){
			getGroups(this.props.userId)
				.then((response) => {
					this.props.updateGroups(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
			}
	}
	render() {
		return (
			<div id={styles.leftPanel}>
				<h2>Twoi znajomi</h2>
				<ul id="friendsList">
					{this.props.friends && this.props.friends.map((friend) =>
						<li key={friend.id}>
							<Person key={friend.id} userId={friend.id} firstName={friend.firstName} lastName={friend.lastName}
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
						<li key={group.id} className={styles.group}>
							<Link key={group.id} to={`/group/${group.id}`}>{group.groupName}</Link>
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
	isAuthorized: state.authentication.isAuthorized,
	userId: state.user.userId,
	friends: state.user.friends,
	groups: state.user.groups
});
const mapDispatchToProps = (dispatch) => ({
	updateFriends: (friends) => dispatch(actionCreators.updateFriends(friends)),
	setFriendPhoto: (userId, photoUrl) => dispatch(actionCreators.setFriendPhoto(userId, photoUrl)),
	updateGroups: (groups) => dispatch(actionCreators.updateGroups(groups))
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);