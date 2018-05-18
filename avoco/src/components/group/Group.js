import React, { Component } from 'react';
import styles from './Group.module.css';
import GroupTopPanel from './groupTopPanel/GroupTopPanel';
import GroupPosts from './groupPosts/GroupPosts';
import GroupEvents from './groupEvents/GroupEvents';
import { getGroupInfoApi, getGroupInterestsApi, getGroupImageApi } from '../../api/group';
import { actionCreators as groupActionCreators } from '../../actions/groupActions';
import { actionCreators as userActionCreators } from '../../actions/userActions';
import { connect } from 'react-redux';
import { newPostApi, getPostsApi, newCommentApi, userInGroupApi, joinGroupApi, leaveGroupApi, getEventsApi, deletePostApi, deleteCommentApi } from '../../api/group';
import replaceImagesWithUrls from '../../services/replaceImagesWithUrls';
import replaceDates from '../../services/replaceDates';
import replaceCoords from '../../services/replaceCoords';
import Modal from '../../componentsStateless/modal/Modal';

class Group extends Component { //dodac przycisk dolaczenia do grupy i jego api
	state = {
		loading: true,
		searchString: "",
		modalJoinGroup: false,
		modalDeletePost: false,
		modalDeleteComment: false
	}

	componentDidMount = () => {
		this.getGroupDetails();
		this.getPosts();
		this.checkIfUserInGroup();
		this.getEvents();
	}
	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if (prevProps.match.params.groupId !== this.props.match.params.groupId) {
			this.props.clearGroupData();
			this.getGroupDetails();
			this.getPosts();
			this.checkIfUserInGroup();
			this.getEvents();
		}
	}
	componentWillUnmount = () => {
		this.props.clearGroupData();
	}
	getGroupDetails = () => {
		const groupId = this.props.match.params.groupId;
		this.props.setGroupImage(null);
		getGroupInfoApi(groupId)
			.then((response) => {
				if (this.props.match.params.groupId === groupId) {
					const groupInfo = response.data;
					this.props.setGroupInfo(groupInfo.id, groupInfo.groupName, groupInfo.groupDescription);
				}
				return getGroupInterestsApi(groupId);
			})
			.then((response) => {
				if (this.props.match.params.groupId === groupId) {
					this.props.setGroupInterests(response.data);
				}
				return getGroupImageApi(groupId);
			})
			.then((response) => {
				if (this.props.match.params.groupId === groupId) {
					this.props.setGroupImage(URL.createObjectURL(response.data));
				}
			})
			.catch((error) => console.log(error));
	}
	getPosts = () => {
		const groupId = this.props.match.params.groupId;
		getPostsApi(groupId)
			.then((response) => {
				if (this.props.match.params.groupId === groupId) {
					let posts = response.data;
					replaceImagesWithUrls(posts);
					this.props.setGroupPosts(posts);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => this.setState({ loading: false }));
	}
	getEvents = () => {
		console.log("getting events");
		const groupId = this.props.match.params.groupId;
		getEventsApi(groupId)
			.then((response) => {
				if (this.props.match.params.groupId === groupId) {
					let events = response.data;
					replaceDates(events);
					replaceCoords(events);
					this.props.setGroupEvents(events);
				}
			})
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
			.then((response) => {
				this.props.setJoined(response.data);
			})
			.catch((error) => console.log(error));
	}
	handleJoin = () => {
		joinGroupApi(this.props.match.params.groupId)
			.then((response) => {
				this.props.setJoined(true);
				this.props.updateGroups(response.data);
			})
			.catch((error) => console.log(error))
	}
	handleLeave = () => {
		leaveGroupApi(this.props.match.params.groupId)
			.then((response) => {
				this.props.setJoined(false);
				this.props.updateGroups(response.data);
			})
			.catch((error) => console.log(error));
	}
	handleSearchInput = (e) => {
		const searchString = e.target.value;
		this.setState({ searchString });
	}
	handleDeletePost = () => {
		//console.log(`Removing post ${this.state.postToRemove}`);
		if (!this.state.postToRemove) {
			return;
		}
		deletePostApi(this.state.postToRemove)
			.then(response => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setGroupPosts(posts);
			})
			.catch(error => console.log(error));
		this.setState({ postToRemove: undefined });
	}
	handleDeleteComment = () => {
		if (!this.state.commentToRemove) {
			return;
		}
		deleteCommentApi(this.state.commentToRemove)
			.then(response => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setGroupPosts(posts);
			})
			.catch(error => console.log(error));
		this.setState({ commentToRemove: undefined });
	}

	render() {
		return (
			<React.Fragment>
				{this.state.modalJoinGroup && !this.props.group.joined &&
					<Modal question="Czy na pewno chcesz dołączyć do grupy?"
						cancel={() => this.setState({ modalJoinGroup: false })}
						confirm={this.handleJoin} />}
				{this.state.modalJoinGroup && this.props.group.joined &&
					<Modal question="Czy na pewno chcesz opuścić grupę?"
						cancel={() => this.setState({ modalJoinGroup: false })}
						confirm={this.handleLeave} />}
				{this.state.modalDeletePost &&
					<Modal question="Czy na pewno chcesz usunąć post?"
						cancel={() => this.setState({ modalDeletePost: false })}
						confirm={this.handleDeletePost} />}
				{this.state.modalDeleteComment &&
					<Modal question="Czy na pewno chcesz usunąć komentarz?"
						cancel={() => this.setState({ modalDeleteComment: false })}
						confirm={this.handleDeleteComment} />}
				<GroupTopPanel
					groupName={this.props.group.groupName}
					groupDescription={this.props.group.groupDescription}
					groupInterests={this.props.group.interests}
					groupImageUrl={this.props.group.imageUrl}
					joined={this.props.group.joined}
					showJoinModal={() => this.setState({ modalJoinGroup: true })} />
				<div className={styles.main}>
						<GroupPosts
							loading={this.state.loading}
							posts={this.props.group.posts}
							handleNewPost={this.handleNewPost}
							handleNewComment={this.handleNewComment}
							loggedUserId={this.props.userId}
							showDeletePostModal={postId => this.setState({ modalDeletePost: true, postToRemove: postId })}
							showDeleteCommentModal={commentId => this.setState({ modalDeleteComment: true, commentToRemove: commentId })} />
					<GroupEvents events={this.props.group.events} handleSearchInput={this.handleSearchInput} searchString={this.state.searchString} />
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	group: state.group,
	userId: state.user.userId
});
const mapDispatchToProps = (dispatch) => ({
	setGroupInfo: (id, groupName, groupDescription) => dispatch(groupActionCreators.setGroupInfo(id, groupName, groupDescription)),
	setGroupInterests: (interests) => dispatch(groupActionCreators.setGroupInterests(interests)),
	setGroupImage: (imageUrl) => dispatch(groupActionCreators.setGroupImage(imageUrl)),
	setGroupPosts: (posts) => dispatch(groupActionCreators.setGroupPosts(posts)),
	setJoined: (joined) => dispatch(groupActionCreators.setJoined(joined)),
	updateGroups: (groups) => dispatch(userActionCreators.updateGroups(groups)),
	setGroupEvents: (events) => dispatch(groupActionCreators.setGroupEvents(events)),
	clearGroupData: () => dispatch(groupActionCreators.clearGroupData())
});
export default connect(mapStateToProps, mapDispatchToProps)(Group);