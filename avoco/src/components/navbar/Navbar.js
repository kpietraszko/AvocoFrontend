import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './navbarButton/NavbarButton';
import Person from '../../componentsStateless/person/Person';
import SearchBar from '../../components/searchBar/SearchBar';
import { connect } from 'react-redux';
import { actionCreators as authActionCreators } from '../../actions/authenticationActions';
import { actionCreators as userActionCreators } from '../../actions/userActions';
import { getUserInfo, getPhoto } from '../../api/user';
import { removeToken } from '../../services/tokenStorage';

class Navbar extends Component {
	componentDidMount = () => {
		if (this.props.userId)
			this.setName();
	}
	componentDidUpdate = (prevProps) => {
		if (this.props.userId !== prevProps.userId) {
			this.setName();
		}
	}
	setName = () => {
		getUserInfo(this.props.userId)
			.then((response) => {
				this.props.setName(response.data.firstName, response.data.lastName);
			})
			.then(() => getPhoto(this.props.userId, "small"))
			.then((response) => {
				const url = response.data ? URL.createObjectURL(response.data) : null;
				this.props.setPhoto(url);
			})
			.catch((error) => {
				console.log(error);
				if(error.response && error.response.status === 401)
				{
					this.props.logOut();
				}
			})
	}
	handleLogOutClick = () => {
		removeToken();
		this.props.logOut();
	}
	render() {
		return (
			<div id={styles.navbar}>
				<div id={styles.leftAlignedItems}>
					<div id={styles.logo}>AVOCO</div>
					<NavbarButton title="Strona główna" icon="home" path="/" />
					{/* <NavbarButton title="Wiadomości" icon="message" path="/" /> */}
					<NavbarButton title="Stwórz grupę" icon="add_circle" path="/addGroup" />
					<NavbarButton title="Lista grup" icon="view_list" path="/groupList" />
				</div>
				<div id={styles.rightAlignedItems}>
					<Person userId={this.props.userId} firstName={this.props.firstName} lastName={this.props.lastName} photoUrl={this.props.photoUrl}/>
					{/* <SearchBar /> */}
					<NavbarButton icon="exit_to_app" path="/" onClick={this.handleLogOutClick}>Wyloguj</NavbarButton>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	userId: state.user.userId,
	firstName: state.user.firstName,
	lastName: state.user.lastName,
	photoUrl: state.user.photoUrl
});
const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(authActionCreators.unauthorize()),
	setName: (firstName, lastName) => dispatch(userActionCreators.updateName(firstName, lastName)),
	setPhoto: (photoUrl) => dispatch(userActionCreators.setPhoto(photoUrl))
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);