import React from 'react';
import styles from './Profile.module.css';
import axios from 'axios';
import placeholder from '../person/placeholder.png';
import { connect } from 'react-redux';
import actionCreators from '../../store/actionCreators';
import Regions from '../../regions';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//profileImage: undefined,
			isSelf: false,
			isFriend: false,
			friends: [],
			interests: [],
			groups: [],
			fullName: "",
			region: undefined,
			editingName: false
		}
	}
	componentDidMount = () => {
		this.loadUserInfo();
		this.loadUserPhoto();
		this.getFriendsList();
		this.getInterests();
		this.getGroups();
	}
	loadUserInfo = () => {
		this.setState({ isSelf: this.props.loggedUserId === parseInt(this.props.match.params.userId) });
		axios.get(`/user/${this.props.match.params.userId}/userInfo`)
			.then((response) => {
				this.setState({
					fullName: response.data.fullName,
					region: response.data.region
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	loadUserPhoto = () => {
		axios.get(`/user/${this.props.match.params.userId}/photo`, { responseType: "blob" })
			.then((response) => {
				this.setState({ profileImage: URL.createObjectURL(response.data) });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ profileImage: undefined });
			});
	};
	getFriendsList = () => {
		axios.get("/user/friends")
			.then((response) => {
				this.setState({ friends: response.data }, this.checkIfFriend);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	getInterests = () => {
		axios.get(`/user/${this.props.match.params.userId}/interests`)
			.then((response) => {
				this.setState({ interests: response.data });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ interests: [] });
			})
	}
	getGroups = () => {
		axios.get(`/user/${this.props.match.params.userId}/groups`)
			.then((response) => {
				console.log(response);
				this.setState({ groups: response.data }, () => {
					/* const groups = this.state.groups; //zdjecia grup, nie dziala
					for (let group of groups) {
						axios.get(`/user/${group.groupId}/GroupPicture`)
							.then(
								(response) => { group.groupPicture = URL.createObjectURL(response.data) })
							.catch((error) => {
								console.log(error);
							});
					} */
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ groups: [] });
			});
	}
	checkIfFriend = () => {
		for (var friend of this.state.friends)
			if (friend.userId == this.props.match.params.userId)
				this.setState({ isFriend: true });
	}

	componentDidUpdate = (prevProps) => {
		if (this.props.match.params.userId !== prevProps.match.params.userId) { //jesli przejście na profil innego użytkownika
			this.loadUserInfo();
			this.loadUserPhoto();
			this.checkIfFriend();
			this.getInterests();
			this.getGroups();
		}
	}

	handleAddFriendClick = () => {
		axios.put(`/user/${this.props.match.params.userId}/AddFriend/`)
			.then((response) => {
				console.log(response);
				this.setState({ isFriend: true });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	handleUnfriendClick = () => {
		axios.put(`/user/${this.props.match.params.userId}/Unfriend/`)
			.then((response) => {
				console.log(response);
				this.setState({ isFriend: false });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	toggleEditName = () => {
		this.setState({ editingName: !this.state.editingName });
	}
	handleNameChanged = (e) => {
		e.preventDefault();
		this.setState({ editingName: false });
		const fullName = e.target.newFullName.value;
		const names = e.target.newFullName.value.split(" ");
		axios({
			url: "/user/UserInfo",
			method: "put",
			params: {
				firstName: names[0],
				lastName: names[1]
			}
		}).then(() => {
			this.loadUserInfo();
			this.props.updateName(fullName);
		}).catch((error) => {
			console.log(error);
		});
	}
	handleRegionChanged = (e) => {
		const newRegion = e.target.value;
		this.setState({region: newRegion});
		axios({
			url: "/user/UserInfo",
			method: "put",
			params: {
				region: newRegion
			}
		})
	}

	render = () => {
		return (
			<React.Fragment>
				<div id={styles.srodekOgolny}>
					<div id={styles.lewysrodek}>
						<img src={this.state.profileImage || placeholder}
							alt="Zdjecie profilowe" height="200" width="200" border="4" />
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
								<input name="newFullName" defaultValue={this.state.fullName} className={styles.nameInput} onBlur={this.toggleEditName}/>
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
									{this.state.isFriend && <span onClick={this.handleUnfriendClick}>Usuń ze znajomych</span>}
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
	loggedUserId: state.user.userId
});
const mapDispatchToProps = (dispatch) => ({
	updateName: (newFullName) => dispatch(actionCreators.updateName(newFullName))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);