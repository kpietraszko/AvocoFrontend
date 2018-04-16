import React from 'react';
import styles from './ProfileGroups.module.css';

const ProfileGroups = () => {
	return (
		<div className={styles.nad}> {/* poprawic te nazwy styli dziwne */}
			<span className={styles.zainteresowania}>Grupy</span>
			<ul className={styles.groups}>
				{this.state.groups && this.state.groups.map((group) =>
					<li key={group.groupId} className={styles.groupPhoto} style={{ backgroundImage: `url(${group.groupPicture})` }}>
						<h2>{group.groupName}</h2>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ProfileGroups;