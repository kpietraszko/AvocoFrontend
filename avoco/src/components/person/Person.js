import React from 'react';
import styles from "./Person.module.css";
import { Link } from 'react-router-dom';

const Person = (props) => {
	return (
		<div className={styles.person}>
			<Link to={`/profile/${props.userId}`}>
				<img className="circlePic" src={props.pictureUrl} width={24} height={24}/>
				<span>{props.fullName}</span>
			</Link>
		</div>
	);
};

export default Person;