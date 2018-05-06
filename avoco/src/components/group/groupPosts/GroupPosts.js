import React from 'react';
import styles from './GroupPosts.module.css';
import Person from '../../../componentsStateless/person/Person';
import Post from './post/Post';

const GroupPosts = (props) => { 
	return (
		<React.Fragment>
			<ul id={styles.posts}>
				<form id={styles.newPost} onSubmit={props.handleNewPost}>
					<button type="submit" className={`${styles.button} material-icons`}>add_circle</button>
					<textarea rows={1} name="postInput" placeholder="Nowy post" minLength={5} />
				</form>
				{props.posts && props.posts.map((post) =>
					<Post key={post.id} post={post} />
				)}
			</ul>
		</React.Fragment>
	);
};

export default GroupPosts;