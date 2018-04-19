import React from 'react';
import styles from './AddGroup.module.css';
import { connect } from 'react-redux';
//import { actionCreators as userActions } from '../../actions/userActions'; tu chyba trzeba zrobic wlasne akcje
//import { getUserInfo, getFriends, getGroups, getPhoto, getInterests, addFriend, unfriend, setName, setRegion, setPhoto }
import { createGroupApi } from '../../api/group';

class AddGroup extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	/*
	handleSelectImage = () => {

	}
	handleSubmitZLoginuProszeNieUzywac = (event) => {
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
	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		createGroupApi(form)
			.then((response) => {
				this.props.history.push("/");
				alert("Stworzono grupe");
			})
			.catch((error) => {
				console.log(error);
			})
	}

	 saveURL = (event) => {
		event.preventDefault();
		var getImagePath = URL.createObjectURL(event.target.files[0]);
		this.setState({imageUrl: getImagePath});

		//$('#addGroupImage').css('groupImage', 'url(' + getImagePath + ')');
	} 

	render = () => {
		return (
			<form id={styles.newGroupForm} onSubmit={this.handleSubmit}>
				<input name="groupName" className={styles.groupNameInput} placeholder="Wpisz nazwę grupy" />
				<div id={styles.addGroupImage} style={{ backgroundImage: `url(${this.state.getImagePath})` }}> 
					<label>Obraz grupy</label>
					<input name="groupImage" type="file" className={styles.chooseImageString}> onChange={this.saveURL}</input>
				</div>
				<textarea name="groupDesc" rows="1" className={styles.groupDescInput} placeholder="Kliknij tutaj, aby dodać opis grupie" />
				<input className="submitButtonGreen" type="submit" value="Stwórz grupę" />
			</form>
		);
	}
};
export default AddGroup;
