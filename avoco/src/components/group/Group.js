import React, { Component } from 'react';
import styles from './Group.module.css';
import GroupTopPanel from './groupTopPanel/GroupTopPanel';
import GroupPosts from './groupPosts/GroupPosts';
import GroupEvents from './groupEvents/GroupEvents';
import { getGroupInfoApi, getGroupInterestsApi, getGroupImageApi } from '../../api/group';
import { actionCreators } from '../../actions/groupActions';
import { connect } from 'react-redux';
import { newPostApi, getPostsApi, newCommentApi, userInGroupApi, joinGroupApi, leaveGroupApi } from '../../api/group';
import replaceImagesWithUrls from '../../services/replaceImagesWithUrls';

class Group extends Component { //dodac przycisk dolaczenia do grupy i jego api
	componentDidMount = () => {
		this.getGroupDetails();
		this.getPosts();
		this.checkIfUserInGroup();
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
	getPosts = () => {
		getPostsApi(this.props.match.params.groupId)
			.then((response) => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setGroupPosts(posts);
			})
			.catch((error) => console.log(error));
	}
	handleNewPost = (e) => {
		e.preventDefault();
		const postContent = e.target.postInput.value;
		newPostApi(this.props.match.params.groupId, postContent)
			.then((response) => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setGroupPosts(posts);
			})
			.catch((error) => {
				console.log(error.request);
			})
		e.target.postInput.value = "";
	}
	handleNewComment = (e, postId) => {
		e.preventDefault();
		const comment = e.target.newCommentInput.value;
		newCommentApi(postId, comment)
			.then((response) => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setGroupPosts(posts);
			});
	}
	checkIfUserInGroup = () => {
		userInGroupApi(this.props.match.params.groupId)
			.then((response) =>{

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
				<div className={styles.main}>
					<GroupPosts posts={this.props.group.posts} handleNewPost={this.handleNewPost} handleNewComment={this.handleNewComment}/>
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
	setGroupImage: (imageUrl) => dispatch(actionCreators.setGroupImage(imageUrl)),
	setGroupPosts: (posts) => dispatch(actionCreators.setGroupPosts(posts)),
	setJoined: (joined) => dispatch(actionCreators.setJoined(joined))
});
export default connect(mapStateToProps, mapDispatchToProps)(Group);