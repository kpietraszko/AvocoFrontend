import React, { Component } from 'react';
import GroupTopPanel from './groupTopPanel/GroupTopPanel';
import GroupPosts from './groupPosts/GroupPosts';
import GroupEvents from './groupEvents/GroupEvents';
import { getGroupInfoApi, getGroupInterestsApi, getGroupImageApi } from '../../api/group';
import { actionCreators } from '../../actions/groupActions';
import { connect } from 'react-redux';

class Group extends Component {
	componentDidMount = () => {
		this.getGroupDetails();
	}
	getGroupDetails = () => {
		const groupId = this.props.match.params.groupId;
		getGroupInfoApi(groupId)
			.then((response) => {
				const groupInfo = response.data;
				this.props.setGroupInfo(groupInfo.id, groupInfo.groupName, groupInfo.groupDescription);
				return getGroupInterestsApi(groupId);
			})
			.then((response) => {
				this.props.setGroupInterests(response.data);
				return getGroupImageApi(groupId);
			})
			.then((response) => {
				this.props.setGroupImage(URL.createObjectURL(response.data))
			})
			.catch((error) => console.log(error));
	}
	render() {
		return (
			<React.Fragment>
				<GroupTopPanel
					groupName={this.props.group.groupName}
					groupDescription={this.props.group.groupDescription}
					groupInterests={this.props.group.interests}
					groupImageUrl={this.props.group.imageUrl} />
				<GroupPosts />
				<GroupEvents />
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	group: state.group
});
const mapDispatchToProps = (dispatch) => ({
	setGroupInfo: (id, groupName, groupDescription) => dispatch(actionCreators.setGroupInfo(id, groupName, groupDescription)),
	setGroupInterests: (interests) => dispatch(actionCreators.setGroupInterests(interests)),
	setGroupImage: (imageUrl) => dispatch(actionCreators.setGroupImage(imageUrl))
});
export default connect(mapStateToProps, mapDispatchToProps)(Group);