import React from 'react';
import styles from './GroupTopPanel.module.css';

const GroupTopPanel = (props) => {
	return (
		<div id={styles.topPanel}>
				<div className={styles.main}>
					<div id={styles.groupCover} style={{ backgroundImage: `url(${props.groupImageUrl})` }}>
						<h1>{props.groupName}</h1>
					</div>
					<div id={styles.groupInterests}>
						<h2>Zainteresowania grupy</h2>
						<ul>
							{props.groupInterests && props.groupInterests.map(interest => 
							<li key={interest.id} className={styles.interest}>
								<span key={interest.id} className="whiteRounded">{interest.interestName}</span>
							</li>
							)}
						</ul>
					</div>
				</div>
				<div className={`title ${styles.title}`}>{props.groupDescription}</div>
			</div>
	);
};

export default GroupTopPanel;