import React from 'react';
import styles from './ProfileUserDetails.module.css';

const ProfileUserDetails = (props) => {
	return (
		<React.Fragment>
			{!props.editingName &&
				<span className={styles.profil}>
					{!props.editingName &&
						props.firstName + " " + props.lastName}

					{props.isLoggedProfile && !props.editingName &&
						<button className={`material-icons ${styles.edit}`} onClick={props.toggleEditName}>mode_edit</button>}
				</span>}
			{props.editingName &&
				<form onSubmit={props.handleNameChanged} className={styles.profil}>
					<input name="newFullName" defaultValue={props.firstName + " " + props.lastName}
						 className={styles.nameInput} onBlur={props.toggleEditName} />
				</form>
			}
			{props.isLoggedProfile &&
				<select value={props.region} className={`${styles.profil} ${styles.regionCombobox} Combobox`} name="Region" onChange={props.handleRegionChanged}>
					{props.regions.map((region, i) =>
						<option value={i} key={i}>{region}</option>
					)}
				</select>}
			{!props.isLoggedProfile &&
				<span className={styles.profil}>{props.regions[props.region]}</span>}
		</React.Fragment>
	);
};

export default ProfileUserDetails;