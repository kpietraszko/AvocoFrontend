import React, { Component } from 'react';
import styles from './GroupSearchBar.module.css';

const GroupSearchBar = (props) => {
		return (
			<div className={styles.searchBar} onBlur={this.handleBlur}>
				<input placeholder="Szukaj grup..." onInput={props.handleSearchInput} className={styles.searchInput}></input>
				<div className={`material-icons primaryColor ${styles.searchIcon}`}>search</div>
			</div>
		);
}

export default GroupSearchBar;