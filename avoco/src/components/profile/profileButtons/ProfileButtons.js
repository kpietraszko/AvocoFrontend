import React from 'react';
import styles from './ProfileButtons.module.css';

const ProfileButtons = (props) => {
	return (
		<div className={styles.messfriends}>
			{!props.isSelf && <React.Fragment>
				<span className={styles.message}>
					<div className="material-icons navbarButton">message</div>
					<span>Napisz wiadomość</span>
				</span>
				<span className={`${styles.friends} 
							${props.isFriend ? styles.friendsRemove : styles.friendsAdd}`}>
					{props.isFriend && !props.confirmingRemoveFriend &&
						<span onClick={props.handleUnfriendClick}>
							Usuń ze znajomych
									</span>}
					{props.isFriend && props.confirmingRemoveFriend &&
						<span onClick={props.handleUnfriendClick}>
							Na pewno?
									</span>}
					{!props.isFriend && <span onClick={props.handleAddFriendClick}>Dodaj do znajomych</span>}
				</span></React.Fragment>}
		</div>
	);
};

export default ProfileButtons;