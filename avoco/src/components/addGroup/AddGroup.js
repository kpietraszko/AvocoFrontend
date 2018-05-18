import React from 'react';
import styles from './AddGroup.module.css';
import { connect } from 'react-redux';
import { createGroupApi } from '../../api/group';
import Spinner from '../../componentsStateless/spinner/Spinner'; 

class AddGroup extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		this.setState({isLoading: true});

		createGroupApi(form)
			.then((response) => {
				this.props.history.push(`/group/${response.data}`);
				this.setState({ isLoading: false });
			})
			.catch((error) => {
				console.log(error);
			})
	}

	saveURL = (event) => {
		event.preventDefault();
		var getImagePath = URL.createObjectURL(event.target.files[0]);
		this.setState({ imageUrl: getImagePath });
	}

	render = () => {
		return (
			this.state.isLoading ? <Spinner size ={40}/> :
			<form id={styles.newGroupForm} onSubmit={this.handleSubmit}>
				<div className={styles.background} style={{ backgroundImage: `url(${this.state.imageUrl})` }}>
					<input name="groupName" className={styles.groupNameInput} placeholder="Wpisz nazwę grupy" minLength={5}/>
					<div id={styles.addGroupImage}>
						<label>Obraz grupy</label>
						<input name="groupImage" type="file" className={styles.chooseImageString} onChange={this.saveURL}></input>
					</div>
				</div>
				<textarea name="groupDesc" rows="1" className={styles.groupDescInput} placeholder="Kliknij tutaj, aby dodać opis grupie" />
				<input className="submitButtonGreen" type="submit" value="Stwórz grupę" />
			</form>
		);
	}
};
export default AddGroup;
