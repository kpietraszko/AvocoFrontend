import React from 'react';
import styles from './ProfileButtons.module.css';

const ProfileButtons = () => {
	return (
		<div className={styles.messfriends}>
			{!this.state.isSelf && <React.Fragment>
				<span className={styles.message}>
					<div className="material-icons navbarButton">message</div>
					<span>Napisz wiadomość</span>
				</span>
				<span className={`${styles.friends} 
							${this.state.isFriend ? styles.friendsRemove : styles.friendsAdd}`}>
					{this.state.isFriend && !this.state.confirmingRemoveFriend &&
						<span onClick={this.handleUnfriendClick}>
							Usuń ze znajomych
									</span>}
					{this.state.isFriend && this.state.confirmingRemoveFriend &&
						<span onClick={this.handleUnfriendClick}>
							Na pewno?
									</span>}
					{!this.state.isFriend && <span onClick={this.handleAddFriendClick}>Dodaj do znajomych</span>}
				</span></React.Fragment>}
		</div>
	);
};

export default ProfileButtons;