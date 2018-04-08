import React, { Component } from 'react';
import styles from './LeftPanel.module.css';
import Person from '../person/Person';
import { Link } from 'react-router-dom';

class LeftPanel extends Component {
	constructor() {
		super();
		this.state = {
			mockedFriends: ["Joanna Kowalska", "Jadwiga Ćwir", "Marek Kupczyk", "Michał Bosy"],
			mockedGroups: ["Militaria", "Gotowanie w lesie", "Fotografowie z Olsztyna"]
		};
	}
	render() {
		return (
			<div id={styles.leftPanel}>
				<h2>Twoi znajomi</h2>
				<ul id="friendsList">
					{this.state.mockedFriends.map((friend, i) =>
						<li key={i}><Person userId={1} fullName={friend}></Person></li>
					)}
				</ul>
				<h2>Twoje grupy</h2>
				<ul id="groupsList">
					{this.state.mockedGroups.map((group, i) =>
						<li key={i} className={styles.group}>
							<Link to="/group">{group}</Link>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default LeftPanel;