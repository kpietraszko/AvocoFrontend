import React from 'react';
import styles from './Profile.module.css';
import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../actions/userActions';
import { actionCreators as profileActions } from '../../actions/profileActions';
import Regions from '../../services/regions';
import { getUserInfo, getFriends, getGroups, getPhoto, getInterests, addFriend, unfriend, setName, setRegion, setPhoto }
	from '../../api/user';
import ProfilePhoto from './profilePhoto/ProfilePhoto';
import ProfileUserDetails from './profileUserDetails/ProfileUserDetails';
import ProfileButtons from './profileButtons/ProfileButtons';
import ProfileInterests from './profileInterests/ProfileInterests';
import ProfileGroups from './profileGroups/ProfileGroups';

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {}
	}
	componentDidUpdate = (prevProps) => {
		if (this.props.userId !== prevProps.userId || //jesli podano userId pierwszy raz 
			this.props.match.params.userId !== prevProps.match.params.userId) //lub jesli przejście na profil innego użytkownika
		{
			this.getUserInfo();
			this.getUserPhoto();
			this.getFriends();
			this.getInterests();
			this.getGroups();
		}
	}

	getUserInfo = () => {
		this.props.setIsSelf(this.props.loggedUserId === parseInt(this.props.match.params.userId));
		getUserInfo(this.props.match.params.userId)
			.catch((error) => {
				console.log(error);
			});
	}
	getUserPhoto = () => {
		getPhoto(this.props.match.params.userId)
			.then((response) => {
				this.setState({ profileImage: URL.createObjectURL(response.data) }); //zmienic
			})
			.catch((error) => {
				console.log(error);
			});
	};
	getFriends = () => {
		getFriends()
			.then((response) => {
				this.props.updateFriends(response.data);
				this.checkIfFriend();
			})
			.catch((error) => {
				console.log(error);
			});
	}
	getInterests = () => {
		getInterests(this.props.match.params.userId)
			.catch((error) => {
				console.log(error);
			})
	}
	getGroups = () => {
		getGroups(this.props.match.params.userId)
			.catch((error) => {
				console.log(error);
			});
	}
	checkIfFriend = () => {
		for (var friend of this.props.friends)
			if (friend.userId == this.props.match.params.userId)
				this.props.setIsFriend(true);
	}

	handleAddFriendClick = () => {
		addFriend(this.props.match.params.userId)
			.then((response) => {
				console.log(response);
				getFriends();
			})
			.catch((error) => {
				console.log(error);
			});
	}
	handleUnfriendClick = () => {
		if (this.state.confirmingRemoveFriend) {
			unfriend(this.props.match.params.userId)
				.then(() => {
					this.props.setIsFriend(true);
					this.setState({ confirmingRemoveFriend: false });

				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			this.setState({ confirmingRemoveFriend: true });
		}
	}
	toggleEditName = () => {
		this.setState({ editingName: !this.state.editingName });
	}
	handleNameChanged = (e) => {
		e.preventDefault();
		this.setState({ editingName: false });
		const names = e.target.newFullName.value.split(" ");
		setName(names)
			.then(() => {
				this.props.updateName(names[0], names[1]);
			}).catch((error) => {
				console.log(error);
			});
	}
	handleRegionChanged = (e) => {
		const newRegion = e.target.value;
		setRegion(newRegion)
			.then((response) => {
				this.props.updateRegion(response.data)
			});
	}
	handleImageUpload = (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append("file", image)
		setPhoto(formData)
			.then((response) => {
				this.props.updatePhoto(URL.createObjectURL(response.data));
			});
	}

	render = () => {
		return (
			<React.Fragment>
				<div id={styles.userData}>
					{this.props.profile && <ProfilePhoto photoUrl={this.props.photoUrl} isSelf={this.props.profile.isSelf} handleImageUpload={this.handleImageUpload} />}
					<div id={styles.userDetails}>
						{this.props.profile && <ProfileUserDetails {...this.props.profile} editingName={this.state.editingName}
							handleNameChanged={this.handleNameChanged} handleRegionChanged={this.handleRegionChanged} regions={Regions}/>}
						{this.props.profile && <ProfileButtons isSelf={this.props.profile.isSelf} ifFriend={this.props.profile.isFriend}
							confirmingRemoveFriend={this.state.confirmingRemoveFriend} handleUnfriendClick={this.handleUnfriendClick}
							handleAddFriendClick={this.handleAddFriendClick} />}
					</div>

				</div>
				<div className={styles.interestsAndGroups}>
					{this.props.profile && <ProfileInterests interests={this.props.profile.interests} />}
					{this.props.profile && <ProfileGroups groups={this.props.profile.groups} />}
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedUserId: state.user.userId,
	loggedUserFirstName: state.user.firstName,
	loggedUserLastName: state.user.lastName,
	loggedUserRegion: state.user.region,
	friends: state.user.friends,
	photoUrl: state.user.photoUrl, //wywalic raczej
	/* 	profileId: state.profile.Id,
	profileFirstName: state.profile.firstName,
	profileLastName: state.profile.lastName,
	profileRegion: state.profile.region, */
	profile: state.profile, //nie wiem czy tak mozna
});
const mapDispatchToProps = (dispatch) => ({
	updateName: (firstName, lastName) => dispatch(userActions.updateName(firstName, lastName)),
	updateRegion: (region) => dispatch(userActions.updateRegion(region)),
	updatePhoto: (photoUrl) => dispatch(userActions.updatePhoto(photoUrl)),
	updateFriends: (friends) => dispatch(userActions.updateFriends(friends)),
	setUserDetails: (firstName, lastName, region) => dispatch(profileActions.setUserDetails(firstName, lastName, region)),
	setIsSelf: (isSelf) => dispatch(profileActions.setIsSelf(isSelf)),
	setIsFriend: (isFriend) => dispatch(profileActions.setIsFriend(isFriend)),
	setInterests: (interests) => dispatch(profileActions.setInterests(interests)),
	setGroups: (groups) => dispatch(profileActions.setGroups(groups))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);