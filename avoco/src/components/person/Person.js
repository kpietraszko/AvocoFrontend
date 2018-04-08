import React from 'react';
import styles from "./Person.module.css";
import { Link } from 'react-router-dom';
import placeholder from './placeholder.png';

const Person = (props) => {
	return (
		<div className={styles.person}>
			<Link to={`/profile/${props.userId}`}>
				<img className="circlePic" src={props.pictureUrl || placeholder}
				 width={24} height={24} alt=""/>
				<span className={props.background ? styles.spanBackground : styles.spanNoBackground}>{props.fullName}</span>
			</Link>
		</div>
	);
};

export default Person;