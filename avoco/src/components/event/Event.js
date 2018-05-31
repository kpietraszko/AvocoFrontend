import React, { Component } from 'react';
import styles from './Event.module.css';
import { Link } from 'react-router-dom';
import Person from '../../componentsStateless/person/Person';

class Event extends Component {
	render() {
		return (
			<React.Fragment>
				<div id={styles.topPanel}>
					<div className={styles.main}>
						<div id={styles.groupCover}>
							<h1>Militaria</h1>
						</div>
						<div id={styles.groupInterests}>
							<h2>Zainteresowani</h2>
							<ul>
								<li className={styles.person}> {/* mozliwe ze usunac tu klase */}
									<Person />
								</li>
							</ul>
						</div>
					</div>
					<div className={`title ${styles.title}`}>
						<div className={styles.eventName}>
							<span>Wydarzenie:</span> ASG w terenie.
					</div>
						<div id={styles.interestedButton}>
							<div className={`material-icons ${styles.symbolCircle}`}>star_border</div>
							<div id={styles.interestedButtonText} className="whiteRounded">
								Zainteresowany
						</div>
						</div>

					</div>
				</div>
				<div id={styles.eventInfo}>
					<div id={styles.dateAndDescription}>
						<div className={styles.date}>
							<div className={`${styles.dateText} whiteRounded`}>
								<div className="material-icons">event</div>
								16
							<div className={styles.dateDetails}>
									<div className={styles.month}>MAR</div>
									<div className={styles.time}>12:00</div>
								</div>
							</div>
						</div>
						<div className="whiteRounded" id={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin id mauris at iaculis. Phasellus sit amet
							dui tempor, egestas lectus mollis, fringilla sem. Duis rhoncus cursus auctor. Etiam ultricies nec tortor placerat pulvinar.
						Pellentesque vitae ligula condimentum, auctor lacus ut, efficitur augue.</div>
					</div>
					<div id={styles.map}>
						<iframe frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxkUBy154kYRD8JUzyaBahA&key=AIzaSyAe_x-NCWFqmMdoudhr8pBb7QhJo8p0y9s"
							allowFullscreen></iframe>
					</div>
					<div id={styles.comments}>
						<h2>Komentarze
						<div className={`${styles.addCommentIcon} material-icons`}>insert_comment</div>
						</h2>
						<div className={`${styles.comment} whiteRounded`}>
							<Person />
							<span>Duis in quam a augue viverra.</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Event;