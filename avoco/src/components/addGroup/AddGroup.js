import React from 'react';
import styles from './AddGroup.module.css';
import { connect } from 'react-redux';
//import { actionCreators as userActions } from '../../actions/userActions'; tu chyba trzeba zrobic wlasne akcje
//import { getUserInfo, getFriends, getGroups, getPhoto, getInterests, addFriend, unfriend, setName, setRegion, setPhoto }
//import api

class AddGroup extends React.Component {
	constructor() {
		super();
		this.state = {};
	}/*
	handleSelectImage = () => {

	}
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		login(form)
			.then((response) => {
				const token = response.data.token;
				setAuthorizationHeader(token);
				this.props.authorize(token);
				const data = getDataFromToken(token)
				this.props.saveTokenData(data);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 401)
					this.setState({ error: "Nieprawidłowe dane logowania" });
				else if (error.request)
					this.setState({ error: "Serwer nie odpowiada" });
			});
	}*/

	render = () => {
		return (
			<form id={styles.newGroupForm} onSubmit={handleSubmit}>
				<input className={styles.groupNameInput} placeholder="Wpisz nazwę grupy" />
				<div id={styles.addGroupImage}>
					<label>Obraz grupy</label>
					<input type="file" id={styles.chooseImageString}></input>
				</div>
				<input className={styles.groupDescInput} placeholder="Kliknij tutaj, aby dodać opis grupie" />
				<input type="submit" className={styles.createGroup} value="Stwórz grupę" />
			</form>
		);
	}
}
//const
;
export default AddGroup;
