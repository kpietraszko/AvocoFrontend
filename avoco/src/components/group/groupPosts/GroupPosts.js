import React from 'react';
import styles from './GroupPosts.module.css';
import Post from './post/Post';

const GroupPosts = (props) => { 
	return (
		<React.Fragment>
			<ul id={styles.posts}>
				<form id={styles.newPost} onSubmit={props.handleNewPost}>
					<textarea rows={1} name="postInput" placeholder="Nowy post" minLength={5} />
					<button type="submit" className={`${styles.button} material-icons`}>add_circle</button>
				</form>
				{props.posts && props.posts.map((post) =>
					<Post key={post.id} post={post} handleNewComment={props.handleNewComment}/>
				)}
			</ul>
		</React.Fragment>
	);
};

export default GroupPosts;