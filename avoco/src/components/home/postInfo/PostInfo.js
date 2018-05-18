import React from 'react';
import styles from './PostInfo.module.css';
import Post from '../../group/groupPosts/post/Post';
import { Link } from 'react-router-dom';

const PostInfo = (props) => {
	return (
		<li className={styles.postInfo}>
			<div className={styles.main}>
				<Post key={props.post.id} post={props.post} feed/>
			</div>
			<Link to={`/group/${props.post.groupId}`} className={styles.title}>
				Użytkownik
				<strong>{` ${props.post.firstName} ${props.post.lastName} `}</strong>
				dodał wpis w grupie{' '}
				<strong>{props.post.groupName}</strong>.
			</Link>
		</li>
	);
};

export default PostInfo;