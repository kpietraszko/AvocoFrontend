import React, { Component } from 'react';
import styles from './LeftPanel.module.css';
import Person from '../person/Person';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends, getGroups } from '../../api/user';
import { actionCreators } from '../../actions/userActions';

class LeftPanel extends Component {
	componentDidUpdate = (prevProps) => {
		if (this.props.friends !== prevProps.friends)
			this.getFriends();

		if (this.props.userId !== prevProps.userId)
			this.getGroups();
	}
	getFriends = () => {
		getFriends()
			.then((response) => {
				console.log(response.data);
				this.props.updateFriends(response.data)
			})
			.catch((error) => {
				console.log(error);
			});
		getGroups()
			.then((response) => {
				this.setState({ groups: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	getGroups = () => {

	}
	render() {
		return (
			<div id={styles.leftPanel}>
				<h2>Twoi znajomi</h2>
				<ul id="friendsList">
					{this.props.friends.map((friend) =>
						<li key={friend.userId}><Person userId={friend.userId} fullName={friend.fullName} background></Person></li>
					)}
					{this.props.friends.length === 0 &&
						<p>Nie masz znajomych ☹️</p>
					}
				</ul>
				<hr />
				<h2>Twoje grupy</h2>
				<ul id="groupsList">
					{this.props.groups.map((group) =>
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
LeftPanel.defaultProps = { //potrzebne, bo render probuje uzyskac dostęp do propów, które jeszcze nie przyszły
	friends: [],
	groups: []
}
const mapStateToProps = (state) => ({
	userId: state.user.userId,
	friends: state.user.friends,
	groups: state.user.groups
});
const mapDispatchToProps = (dispatch) => ({
	updateFriends: (friends) => dispatch(actionCreators.updateFriends(friends))
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);