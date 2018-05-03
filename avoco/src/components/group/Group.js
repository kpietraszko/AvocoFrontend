import React, { Component } from 'react';
import styles from './Group.module.css';
import GroupTopPanel from './groupTopPanel/GroupTopPanel';
import GroupPosts from './groupPosts/GroupPosts';
import GroupEvents from './groupEvents/GroupEvents';
import { getGroupInfoApi, getGroupInterestsApi, getGroupImageApi } from '../../api/group';
import { actionCreators } from '../../actions/groupActions';
import { connect } from 'react-redux';
import { newPostApi, getPostsApi } from '../../api/group';

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
	handleNewPost = (e) => {
		e.preventDefault();
		const postContent = e.target.postInput.value;
		newPostApi(this.props.match.params.groupId, postContent)
			.then((response) => {
				//response.data to wszystkie posty grupy, zapisac je w storze
			})
			.catch((error) => {
				console.log(error.request);
			})
		e.target.postInput.value = "";
	}
	render() {
		return (
			<React.Fragment>
				<GroupTopPanel
					groupName={this.props.group.groupName}
					groupDescription={this.props.group.groupDescription}
					groupInterests={this.props.group.interests}
					groupImageUrl={this.props.group.imageUrl} />
				<div className={styles.main}>
					<GroupPosts handleNewPost={this.handleNewPost} />
					<GroupEvents />
				</div>
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