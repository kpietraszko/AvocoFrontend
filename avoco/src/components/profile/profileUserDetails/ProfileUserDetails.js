import React from 'react';
import styles from './ProfileUserDetails.module.css';

const ProfileUserDetails = () => {
	return (
		<React.Fragment>
			{!this.props.editingName &&
				<span className={styles.profil}>
					{!this.props.editingName &&
						this.state.fullName}

					{this.props.isSelf && !this.props.editingName &&
						<button className={`material-icons ${styles.edit}`} onClick={this.props.toggleEditName}>mode_edit</button>}
				</span>}
			{this.props.editingName &&
				<form onSubmit={this.props.handleNameChanged} className={styles.profil}>
					<input name="newFullName" defaultValue={this.props.fullName} className={styles.nameInput} onBlur={this.props.toggleEditName} />
				</form>
			}
			{this.props.isSelf &&
				<select value={this.props.region} className={`${styles.profil} ${styles.regionCombobox}`} name="Region" onChange={this.props.handleRegionChanged}>
					{this.props.Regions.map((region, i) =>
						<option value={i} key={i}>{region}</option>
					)}
				</select>}
			{!this.props.isSelf &&
				<span className={styles.profil}>{this.props.Regions[this.props.region]}</span>}
		</React.Fragment>
	);
};

export default ProfileUserDetails;