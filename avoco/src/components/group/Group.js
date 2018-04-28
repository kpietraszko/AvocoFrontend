import React, { Component } from 'react';
import GroupTopPanel from './groupTopPanel/GroupTopPanel';
import GroupPosts from './groupPosts/GroupPosts';
import GroupEvents from './groupEvents/GroupEvents';

class Group extends Component {
	render() {
		return (
			<React.Fragment>
				<GroupTopPanel />
				<GroupPosts />
				<GroupEvents />
			</React.Fragment>
		);
	}
}

export default Group;