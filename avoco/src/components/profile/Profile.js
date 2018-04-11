import React from 'react';
import styles from './Profile.module.css';
import axios from 'axios';
import placeholder from '../person/placeholder.png';
import { connect } from 'react-redux';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//profileImage: undefined,
			isSelf: false,
			isFriend: false,
			friends: [],
			fullName: "",
			region: ""
		}
	}
	componentDidMount = () => {
		this.loadUserInfoAndPhoto();
		this.getFriendsList();
	}
	loadUserInfoAndPhoto = () => {
		this.setState({ isSelf: this.props.loggedUserId === parseInt(this.props.match.params.userId) });
		axios.get(`/user/${this.props.match.params.userId}/photo`, { responseType: "blob" })
			.then((response) => {
				console.log(response.data);
				this.setState({ profileImage: URL.createObjectURL(response.data) });
			})
			.catch((error) => {
				console.log(error);
			});
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
	getFriendsList = () => {
		axios.get("/user/friends")
			.then((response) => {
				this.setState({ friends: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidUpdate = (prevProps) => {
		if (this.props.match.params.userId !== prevProps.match.params.userId)
		{
			this.loadUserInfoAndPhoto();
			for (var friend of this.state.friends)
				if(friend.userId == this.props.match.params.userId)
					this.setState({isFriend: true});
		}
	}

	handleAddFriendClick = () => {
		axios.put(`/user/${this.props.match.params.userId}/AddFriend/`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	handleUnfriendClick = () => {
		axios.put(`/user/${this.props.match.params.userId}/Unfriend/`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
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
						<span className={styles.profil}>{this.state.fullName}</span>
						<span className={styles.profil}>{this.state.region}</span>
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
						<ul id={styles.hobbiesList}>
							<li>
								<span className={styles.hobby}>Filmy</span>
							</li>
						</ul>
					</div>
					<div className={styles.nad}>
						<span className={styles.zainteresowania}>Grupy</span>
						<div className={styles.groups}>
							<div className={styles.groupPhoto}>
								<a href="group.html"><h2>Militaria</h2></a> {/* TODO: Zrobić z tego komponent */}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	loggedUserId: state.user.userId
});
export default connect(mapStateToProps)(Profile);