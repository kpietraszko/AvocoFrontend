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
	} 

	render = () => {
		return (
			<form id={styles.newGroupForm} onSubmit={this.handleSubmit}>
				<input name="groupName" className={styles.groupNameInput} placeholder="Wpisz nazwę grupy" />
				<div id={styles.addGroupImage} style={{ backgroundImage: `url(${this.state.imageUrl})` }}> 
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
