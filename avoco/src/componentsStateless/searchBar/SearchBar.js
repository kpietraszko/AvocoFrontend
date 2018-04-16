import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
	render() {
		return (
			<div className={styles.searchBar}>
				<input placeholder="Szukaj..."></input>
				<div className={`material-icons primaryColor ${styles.searchIcon}`}>search</div>
			</div>
		);
	}
}

export default SearchBar;