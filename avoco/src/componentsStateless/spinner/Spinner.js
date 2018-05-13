import React from 'react';
import styles from './Spinner.module.css';

const Spinner = (props) => {
	const size = `${(props.size || 40)}px`;
	return (
		<div className={styles.spinner} style={{width: size, height: size}}>{' '}</div>
	);
};

export default Spinner;