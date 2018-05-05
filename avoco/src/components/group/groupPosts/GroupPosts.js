import React from 'react';
import styles from './GroupPosts.module.css';
import Person from '../../../componentsStateless/person/Person';

const GroupPosts = (props) => {
	return (
		<React.Fragment>
			<ul id={styles.posts}>
				<form id={styles.newPost} onSubmit={props.handleNewPost}>
					<span className={`${styles.button} material-icons`}>add_circle</span>
					<input name="postInput" placeholder="Nowy post" minLength={5} />
				</form>
				{props.posts && props.posts.map((post) =>
					<li key={post.id} className={styles.post}>
						<Person userId={post.userId}
							firstName={post.firstName}
							lastName={post.lastName}
							photoUrl={post.userImage}
							background />
						<div className={styles.postContent}>
							<div className="whiteRounded">
								{post.content}
							</div>
							<hr />
							{post.postComments.map((comment) =>
								<div key={comment.id} className={`${styles.comment} whiteRounded`}>
									<Person userId={comment.userId}
										firstName={comment.firstName}
										lastName={comment.lastName}
										photoUrl={comment.userImage}
										background />
									<span>{comment.content}</span>
								</div>
							)}
						</div>
					</li>
				)}
			</ul>
		</React.Fragment>
	);
};

export default GroupPosts;