import React from 'react';
import styles from './ProfileInterests.module.css';
import SearchBar from '../../searchBar/SearchBar';

const ProfileInterests = (props) => {
	return (
		<div>
			<span className="zainteresowania">Zainteresowania</span>
			{props.isLoggedProfile && <SearchBar getInterests={props.getInterests}/>}
			<ul id={styles.interestsList}>
				{props.interests && props.interests.map((interest) =>
					<li key={interest.id}>
						<span key={interest.id} className={styles.interest}>{interest.interestName}</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ProfileInterests;