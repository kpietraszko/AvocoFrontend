import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './navbarButton/NavbarButton';
import Person from '../person/Person';
import SearchBar from '../searchBar/SearchBar';
import { connect } from 'react-redux';
import { actionCreators as authActionCreators } from '../../actions/authenticationActions';
import { actionCreators as userActionCreators } from '../../actions/userActions';
import { getUserInfo } from '../../api/user';

class Navbar extends Component {
	componentDidUpdate = (prevProps) => {
		if (this.props.userId !== prevProps.userId) { 
		    this.saveName();
		}
	}
	saveName = () => {
		getUserInfo(this.props.userId)
				.then((response) => {
					const firstName = response.data.firstName;
					const lastName = response.data.lastName;
					this.props.setName(firstName, lastName);
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
					<Person userId={this.props.userId} fullName={`${this.props.firstName || ""} ${this.props.lastName || ""}`} />
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
	lastName: state.user.lastName
});
const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(authActionCreators.unauthorize()),
	setName: (firstName, lastName) => dispatch(userActionCreators.updateName(firstName, lastName))
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);