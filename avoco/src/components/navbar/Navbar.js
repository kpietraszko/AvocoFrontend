import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './navbarButton/NavbarButton';
import Person from '../person/Person';
import SearchBar from '../searchBar/SearchBar';
import { connect } from 'react-redux';
import axios from 'axios';
import actionCreators from '../../store/actionCreators';

class Navbar extends Component {
	componentDidMount = () => {
		axios.get(`/user/${this.props.userId}/userInfo`)
			.then((response) => {
				this.props.updateName(response.data.fullName)
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
					<Person userId={this.props.userId} fullName={this.props.fullName} />
					<SearchBar />
					<NavbarButton icon="exit_to_app" path="/" onClick={this.props.logOut}>Wyloguj</NavbarButton>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	userId: state.user.userId,
	fullName: state.user.fullName
});
const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(actionCreators.unauthorize()),
	updateName: (newFullName) => dispatch(actionCreators.updateName(newFullName))
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);