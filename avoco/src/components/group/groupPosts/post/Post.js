import React from 'react';
import Person from '../../../../componentsStateless/person/Person';
import styles from './Post.module.css';

const Post = (props) => {
	const byLoggedUser = props.loggedUserId === props.post.userId;
	return (
		<React.Fragment> {/* potrzebne bo nie mozna na początku jsxa użyć { */}
			{props.post && <li key={props.post.id} className={styles.post}>
				<Person userId={props.post.userId}
					firstName={props.post.firstName}
					lastName={props.post.lastName}
					photoUrl={props.post.userImage}
					background />
				<div className={styles.postContent}>
					{byLoggedUser && <div className={`material-icons ${styles.deleteButton}`}
						onClick={() => props.showDeletePostModal(props.post.id)}>
						delete
					</div>}
					<div className="whiteRounded">
						{props.post.content}
					</div>
					<hr />{/*  */}
					{props.post.postComments.map((comment) =>
						<div key={comment.id} className={`${styles.comment} whiteRounded`}>
							{comment.userId === props.loggedUserId && <div className={`material-icons ${styles.deleteButton}`}
								onClick={() => props.showDeleteCommentModal(comment.id)}>
								delete
					</div>}
							<Person userId={comment.userId}
								firstName={comment.firstName}
								lastName={comment.lastName}
								photoUrl={comment.userImage} />
							<span>{comment.content}</span>
						</div>
					)}
					<form onSubmit={(e) => props.handleNewComment(e, props.post.id)}>
						<textarea className={styles.newComment} name="newCommentInput" rows={1} placeholder="Napisz komentarz..." />
						<input className={styles.commentSubmit} type="submit" value="Wyślij" />
					</form>
				</div>
			</li>}
		</React.Fragment>
	);
};

export default Post;