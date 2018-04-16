import React from 'react';
import styles from './Profile.module.css';
import { connect } from 'react-redux';
import { actionTypes } from '../../actions/userActions';
import Regions from '../../regions';
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
		this.setState({ isSelf: this.props.loggedUserId === parseInt(this.props.match.params.userId) }); //raczej w storze
		getUserInfo(this.props.match.params.userId)
			.catch((error) => {
				console.log(error);
			});
	}
	getUserPhoto = () => {
		getPhoto(this.props.match.params.userId)
			.then((response) => {
				this.setState({ profileImage: URL.createObjectURL(response.data) });
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
				this.setState({ isFriend: true });
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
					this.setState({ isFriend: false, confirmingRemoveFriend: false });
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
				<div id={styles.srodekOgolny}>
					<ProfilePhoto />
					<div id={styles.prawysrodek}>
						<ProfileUserDetails />
						<ProfileButtons />
					</div>

				</div>
				<div className={styles.interestsAndGroups}>
					<ProfileInterests/>
					<ProfileGroups/>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedUserId: state.user.userId,
	friends: state.user.friends,
	photoUrl: state.user.photoUrl
});
const mapDispatchToProps = (dispatch) => ({
	updateName: (firstName, lastName) => dispatch(actionTypes.updateName(firstName, lastName)),
	updateRegion: (region) => dispatch(actionTypes.updateRegion(region)),
	updatePhoto: (photoUrl) => dispatch(actionTypes.updatePhoto(photoUrl)),
	updateFriends: (friends) => dispatch(actionTypes.updateFriends(friends))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);