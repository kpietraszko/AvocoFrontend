import React from 'react';
import styles from './ProfileInterests.module.css';

const ProfileInterests = () => {
	return (
		<div>
			<span className="zainteresowania">Zainteresowania</span>
			<ul id={styles.interestsList}>
				{this.state.interests && this.state.interests.map((interest) =>
					<li key={interest.interestId}>
						<span className={styles.interest}>{interest.interestName}</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ProfileInterests;