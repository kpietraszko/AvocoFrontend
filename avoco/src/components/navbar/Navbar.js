import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './navbarButton/NavbarButton';
import Person from '../../componentsStateless/person/Person';
import SearchBar from '../../componentsStateless/searchBar/SearchBar';
import { connect } from 'react-redux';
import { actionCreators as authActionCreators } from '../../actions/authenticationActions';
import { actionCreators as userActionCreators } from '../../actions/userActions';
import { getUserInfo, getPhoto } from '../../api/user';

class Navbar extends Component {
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
				this.props.setPhoto(URL.createObjectURL(response.data));
			})
			.catch((error) => {
				console.log(error);
			})
	}
	render() {
		return (
			<div id={styles.navbar}>
				<div id={styles.leftAlignedItems}>
					<div id={styles.logo}>AVOCO</div>
					<NavbarButton title="Strona domowa" icon="home" path="/" />
					<NavbarButton title="Wiadomości" icon="message" path="/" />
					<NavbarButton title="Stwórz grupę" icon="add_circle" path="/" />
				</div>
				<div id={styles.rightAlignedItems}>
					<Person userId={this.props.userId} firstName={this.props.firstName} lastName={this.props.lastName} photoUrl={this.props.photoUrl}/>
					<SearchBar />
					<NavbarButton icon="exit_to_app" path="/" onClick={this.props.logOut}>Wyloguj</NavbarButton>
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