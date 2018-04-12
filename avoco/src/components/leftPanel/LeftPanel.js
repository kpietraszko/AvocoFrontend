import React, { Component } from 'react';
import styles from './LeftPanel.module.css';
import Person from '../person/Person';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class LeftPanel extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			groups: []
		};
	}
	componentDidMount = () => {
		this.getFriends();
	}
	/* componentDidUpdate = (prevProps) => { //uwaga: rekurencja jesli nie ma ifa

	} */
	getFriends = () => {
		axios.get("/user/friends")
		.then((response) => {
			this.setState({ friends: response.data });
		})
		.catch((error) => {
			console.log(error);
		});
	axios.get(`/user/${this.props.userId}/groups`)
		.then((response) => {
			this.setState({ groups: response.data});
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
					{this.state.friends.map((friend) =>
						<li key={friend.userId}><Person userId={friend.userId} fullName={friend.fullName} background></Person></li>
					)}
					{this.state.friends.length === 0 &&
						<p>Nie masz znajomych ☹️</p>
					}
				</ul>
				<hr/>
				<h2>Twoje grupy</h2>
				<ul id="groupsList">
					{this.state.groups.map((group) =>
						<li key={group.groupId} className={styles.group}>
							<Link to="/group">{group.groupName}</Link>
						</li>
					)}
					{this.state.groups.length === 0 &&
						<p>Nie jesteś w żadnej grupie</p>
					}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	userId: state.user.userId
});
export default connect(mapStateToProps)(LeftPanel);