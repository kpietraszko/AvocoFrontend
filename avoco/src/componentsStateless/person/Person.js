import React from 'react';
import styles from "./Person.module.css";
import { Link } from 'react-router-dom';
import placeholder from './placeholder.png';

const Person = (props) => {
	return (
		<div className={styles.person}>
			<Link to={{pathname:"/profile/"+props.userId}}>{/* , search:`?userId=${props.userId}`}}> */}
				<img className="circlePic" src={props.photoUrl || placeholder}
				 width={24} height={24} alt=""/>
				<span className={props.background ? styles.spanBackground : styles.spanNoBackground}>{props.firstName} {props.lastName}</span>
			</Link>
		</div>
	);
};

export default Person;