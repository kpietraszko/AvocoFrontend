import React from 'react';
import styles from './ProfilePhoto.module.css';
import placeholder from '../../../componentsStateless/person/placeholder.png';

const ProfilePhoto = (props) => {
	return (
		<div id={styles.container}>
			<img src={ props.photoUrl ||  placeholder}
				alt="Zdjecie profilowe" height="200" width="200" border="4" />
			{props.isLoggedProfile &&
				<form>
					<label htmlFor={styles.uploadInput} id={styles.uploadImage} className="material-icons">file_upload</label>
					<input type="file" id={styles.uploadInput} onChange={props.handleImageUpload} />
				</form>}
		</div>
	);
};

export default ProfilePhoto;