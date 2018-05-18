import React from 'react';
import styles from './GroupPosts.module.css';
import Post from './post/Post';
import Spinner from '../../../componentsStateless/spinner/Spinner';

const GroupPosts = (props) => {
	return (
		<React.Fragment>
			<ul id={styles.posts}>
				{props.loading ?
					<div id={styles.container}>
						<Spinner size={40} />
					</div> :
					<React.Fragment>
						<form id={styles.newPost} onSubmit={props.handleNewPost}>
							<textarea rows={1} name="postInput" placeholder="Nowy post" minLength={5} />
							<button type="submit" className={`${styles.button} material-icons`}>add_circle</button>
						</form>
						{props.posts && props.posts.map((post) =>
							<Post key={post.id} post={post} handleNewComment={props.handleNewComment}
								loggedUserId={props.loggedUserId} showDeletePostModal={props.showDeletePostModal}
								showDeleteCommentModal={props.showDeleteCommentModal} />
						)}
					</React.Fragment>}
			</ul>
		</React.Fragment>
	);
};

export default GroupPosts;