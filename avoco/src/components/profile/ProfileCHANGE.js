import React from 'react';
import styles from './Profile.module.css';
import axios from 'axios';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = { profileImage: new Blob() }
	}
	componentDidMount = () => {
		axios.get("/user/photo/6", { responseType: "blob"})
			.then((response) => {
				console.log(response.data);
				this.setState({ profileImage: URL.createObjectURL(response.data) });
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
						<img src={this.state.profileImage}
							alt="Zdjecie profilowe" height="200" width="200" border="4" />
					</div>
					<div id={styles.prawysrodek}>
						<span className={styles.profil}>Jan Kowalski</span>
						<span className={styles.profil}>Mazowieckie
				</span>
						<div className={styles.messfriends}>
							<span className={styles.message}>
								<div className="material-icons navbarButton">message</div>
								<span>Napisz wiadomość</span>
							</span>
							<span className={styles.friends}>
								<span>Usuń ze znajomych</span>
							</span>
						</div>
					</div>

				</div>
				<div className={styles.grupyizainteresowania}>
					<div>
						<span className="zainteresowania">Zainteresowania</span>
						<ul id={styles.hobbiesList}>
							<li>
								<div className="material-icons symbolCircle">local_movies</div>
								<span className={styles.hobby}>Filmy</span>
							</li>
							{/* <li>
						<div className="material-icons symbolCircle">photo_camera</div>
						<span className="hobby">Fotografia</span>
					</li>
					<li>
						<div className="material-icons symbolCircle">airplanemode_active</div>
						<span className="hobby">Podróże</span>
					</li>
					<li>
						<div className="material-icons symbolCircle">pets</div>
						<span className="hobby">Zwierzęta</span>
					</li>
					<li>
						<div className="material-icons symbolCircle">restaurant_menu</div>
						<span className="hobby">Gotowanie</span>
					</li>  TODO: Zrobić z tego komponent*/}
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

export default Profile;