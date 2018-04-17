import React from 'react';
import styles from './ProfileGroups.module.css';

const ProfileGroups = (props) => {
	return (
		<div className={styles.nad}> {/* poprawic te nazwy styli dziwne */}
			<span className={styles.groupsHeader}>Grupy</span>
			<ul className={styles.groups}>
				{props.groups && props.groups.map((group) =>
					<li key={group.groupId} className={styles.groupPhoto} style={{ backgroundImage: `url(${group.groupPicture})` }}>
						<h2>{group.groupName}</h2>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ProfileGroups;