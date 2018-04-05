import React from "react";
import React, { Component } from 'react';

class Profile extends Component {
	render = () => {
		return (
			<React.Fragment>
			<div id="srodekOgolny">
			<div id="lewysrodek">
				<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/13516354_838225589641270_2836014028175730850_n.jpg?_nc_cat=0&oh=f053430532769fb90948f509e0f8867e&oe=5B4E516B"
					alt="Zdjecie profilowe" height="200" width="200" border="4"/>
			</div>
			<div id="prawysrodek">
				<span className="profil">Jan Kowalski</span>
				<span className="profil">Mazowieckie
				</span>
				<div className="messfriends">
					<span className="message">
						<div className="material-icons navbarButton">message</div>
						<span>Napisz wiadomość</span>
					</span>
					<span className="friends">
						<span>Usuń ze znajomych</span>
					</span>
				</div>
			</div>

		</div>
		<div className="grupyizainteresowania">
			<div>
				<span className="zainteresowania">Zainteresowania</span>
				<ul id="hobbiesList">
					<li>
						<div className="material-icons symbolCircle">local_movies</div>
						<span className="hobby">Filmy</span>
					</li>
					<li>
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
					</li>
				</ul>
			</div>
			<div className="nad">
				<span className="zainteresowania">Grupy</span>
				<div className="groups">
					<div className="groupPhoto">
						<a href="group.html"><h2>Militaria</h2></a>
					</div>
				</div>
			</div>
		</div>
		</React.Fragment>
		);
	}
}

export default Profile;