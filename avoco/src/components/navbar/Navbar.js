import React, { Component } from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './navbarButton/NavbarButton';
import Person from '../person/Person';
import SearchBar from '../searchBar/SearchBar';

class Navbar extends Component {
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
				<Person userId={6} fullName="Andrzej Zalogowany"/> {/*TODO: propsy tutaj ze store'a*/}
				<SearchBar/>
				<NavbarButton icon="exit_to_app" path="/">Wyloguj</NavbarButton>
				</div>
			</div>
		);
	}
}

export default Navbar;