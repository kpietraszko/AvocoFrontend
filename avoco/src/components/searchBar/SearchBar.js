import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import { searchInterests, addInterest } from '../../api/user';

class SearchBar extends Component {
	constructor() { //TEMP
		super();
		this.state = {
			timer: null,
			searchText: "",
			searchResults: []
		};
	}
	handleInput = (e) => this.setState({ searchText: e.target.value });
	handleKeyUp = () => {
		clearTimeout(this.state.timer);
		const timer = setTimeout(() => {
			this.searchInterests();
		}, 500);
		this.setState({ timer });
	}
	searchInterests = () => {
		if (this.state.searchText.length > 1) {
			this.setState({ resultsHidden: false });
			searchInterests(this.state.searchText)
				.then((response) => {
					this.setState({ searchResults: response.data });
				})
		}
	}
	handleInterestClick = (id) => {
		addInterest(id)
			.then(() => {
				this.props.getInterests();
			});
	}
	handleCreateClick = () => {
		addInterest(this.state.searchText)
			.then(() => {
				this.props.getInterests();
			});
	}
	handleBlur = () => {
		setTimeout(() => {
			this.setState({ resultsHidden: true });
		}, 200); 
	}
	render() {
		return (
			<div className={styles.searchBar} onBlur={this.handleBlur}>
				<input placeholder="Szukaj..." value={this.state.searchText} onInput={this.handleInput}
					onKeyUp={this.handleKeyUp}></input>
				<div className={`material-icons primaryColor ${styles.searchIcon}`}>search</div>
				{this.state.searchText.length >= 2 && !this.state.resultsHidden &&
					<ul className={styles.searchResults}>
						{this.state.searchResults.map((result) =>
							<li key={result.id} onClick={() => this.handleInterestClick(result.id)}>
								{result.interestName}
							</li>
						)}
						{this.state.searchText.length >= 2 && this.state.searchResults.length === 0 &&
							<li onClick={() => this.handleCreateClick()}>
								<strong>Stwórz</strong>
								&nbsp;{this.state.searchText}
							</li>}
					</ul>}
			</div>
		);
	}
}

export default SearchBar;