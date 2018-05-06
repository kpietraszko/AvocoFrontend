import React from 'react';
import styles from './Post.module.css';
import Person from '../../../../componentsStateless/person/Person';

const Post = (props) => { //dodać textarea komentarza
	return (
		<React.Fragment> {/* potrzebne bo nie mozna na początku jsxa użyć { */}
			{props.post && <li key={props.post.id} className={styles.post}>
				<Person userId={props.post.userId}
					firstName={props.post.firstName}
					lastName={props.post.lastName}
					photoUrl={props.post.userImage}
					background />
				<div className={styles.postContent}>
					<div className="whiteRounded">
						{props.post.content}
					</div>
					{props.post.postComments.length > 0 && <hr />}
					{props.post.postComments.map((comment) =>
						<div key={comment.id} className={`${styles.comment} whiteRounded`}>
							<Person userId={comment.userId}
								firstName={comment.firstName}
								lastName={comment.lastName}
								photoUrl={comment.userImage}/>
							<span>{comment.content}</span>
						</div>
					)}
					{/* <textarea placeholder="Napisz komentarz..." /> */}
				</div>
			</li>}
		</React.Fragment>
	);
};

export default Post;