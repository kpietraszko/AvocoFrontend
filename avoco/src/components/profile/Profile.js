import React from 'react';
import styles from './Profile.module.css';
import placeholder from '../person/placeholder.png';
import { connect } from 'react-redux';
import { actionTypes } from '../../actions/userActions';
import Regions from '../../regions';
import { getUserInfo, getFriends, getGroups, getPhoto, getInterests, addFriend, unfriend, setName, setRegion, setPhoto } 
		from '../../api/user'

class Profile extends React.Component {

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
			.then(()=>{

			});
	}
	handleImageUpload = (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append("file", image)
		setPhoto(formData);
	}

	render = () => {
		return (
			<React.Fragment>
				<div id={styles.srodekOgolny}>
					<div id={styles.lewysrodek}>
						<img src={this.state.profileImage || placeholder}
							alt="Zdjecie profilowe" height="200" width="200" border="4" />
						{this.state.isSelf &&
							<form>
								<label htmlFor={styles.uploadInput} id={styles.uploadImage} className="material-icons">file_upload</label>
								<input type="file" id={styles.uploadInput} onChange={this.handleImageUpload} />
							</form>}
					</div>
					<div id={styles.prawysrodek}>
						{!this.state.editingName &&
							<span className={styles.profil}>
								{!this.state.editingName &&
									this.state.fullName}

								{this.state.isSelf && !this.state.editingName &&
									<button className={`material-icons ${styles.edit}`} onClick={this.toggleEditName}>mode_edit</button>}
							</span>}
						{this.state.editingName &&
							<form onSubmit={this.handleNameChanged} className={styles.profil}>
								<input name="newFullName" defaultValue={this.state.fullName} className={styles.nameInput} onBlur={this.toggleEditName} />
							</form>
						}
						{this.state.isSelf &&
							<select value={this.state.region} className={`${styles.profil} ${styles.regionCombobox}`} name="Region" onChange={this.handleRegionChanged}>
								{Regions.map((region, i) =>
									<option value={i} key={i}>{region}</option>
								)}
							</select>}
						{!this.state.isSelf &&
							<span className={styles.profil}>{Regions[this.state.region]}</span>}
						<div className={styles.messfriends}>
							{!this.state.isSelf && <React.Fragment>
								<span className={styles.message}>
									<div className="material-icons navbarButton">message</div>
									<span>Napisz wiadomość</span>
								</span>
								<span className={`${styles.friends} 
							${this.state.isFriend ? styles.friendsRemove : styles.friendsAdd}`}>
									{this.state.isFriend && !this.state.confirmingRemoveFriend &&
										<span onClick={this.handleUnfriendClick}>
											Usuń ze znajomych
									</span>}
									{this.state.isFriend && this.state.confirmingRemoveFriend &&
										<span onClick={this.handleUnfriendClick}>
											Na pewno?
									</span>}
									{!this.state.isFriend && <span onClick={this.handleAddFriendClick}>Dodaj do znajomych</span>}
								</span></React.Fragment>}
						</div>
					</div>

				</div>
				<div className={styles.grupyizainteresowania}>
					<div>
						<span className="zainteresowania">Zainteresowania</span>
						<ul id={styles.interestsList}>
							{this.state.interests.map((interest) =>
								<li key={interest.interestId}>
									<span className={styles.interest}>{interest.interestName}</span>
								</li>
							)}
						</ul>
					</div>
					<div className={styles.nad}>
						<span className={styles.zainteresowania}>Grupy</span>
						<ul className={styles.groups}>
							{this.state.groups.map((group) =>
								<li key={group.groupId} className={styles.groupPhoto} style={{ backgroundImage: `url(${group.groupPicture})` }}>
									<h2>{group.groupName}</h2>
								</li>
							)}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedUserId: state.user.userId,
	friends: state.user.friends
});
const mapDispatchToProps = (dispatch) => ({
	updateName: (firstName, lastName) => dispatch(actionTypes.updateName(firstName, lastName)),
	updateRegion: (region) => dispatch(actionTypes.updateRegion(region)),
	updateFriends : (friends) => dispatch(actionTypes.updateFriends(friends))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);