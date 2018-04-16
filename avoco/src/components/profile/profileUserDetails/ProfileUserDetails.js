import React from 'react';
import styles from './ProfileUserDetails.module.css';

const ProfileUserDetails = () => {
	return (
		<React.Fragment>
			{!this.state.editingName &&
				<span className={styles.profil}>
					{!this.state.editingName &&
						this.state.fullName}

					{this.state.isSelf && !this.state.editingName &&
						<button className={`material-icons ${styles.edit}`} onClick={this.toggleEditName}>mode_edit</button>}
				</span>}
			{this.state.editingName &&
				<form onSubmit={this.handleNameChanged} className={styles.profil}>
					<input name="newFullName" defaultValue={this.state.fullName} className={styles.nameInput} onBlur={this.toggleEditName} />
				</form>
			}
			{this.state.isSelf &&
				<select value={this.state.region} className={`${styles.profil} ${styles.regionCombobox}`} name="Region" onChange={this.handleRegionChanged}>
					{this.props.Regions.map((region, i) =>
						<option value={i} key={i}>{region}</option>
					)}
				</select>}
			{!this.state.isSelf &&
				<span className={styles.profil}>{this.props.Regions[this.state.region]}</span>}
		</React.Fragment>
	);
};

export default ProfileUserDetails;