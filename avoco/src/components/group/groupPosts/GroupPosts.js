import React from 'react';
import styles from './GroupPosts.module.css';

const GroupPosts = (props) => {
	return (
		<React.Fragment>
			<ul id={styles.posts}>
				<form id={styles.newPost} onSubmit={props.handleNewPost}>
					<span className={`${styles.button} material-icons`}>add_circle</span>
					<input name="postInput" placeholder="Nowy post" minLength={5}/>
				</form>
			</ul>
		</React.Fragment>
	);
};

export default GroupPosts;