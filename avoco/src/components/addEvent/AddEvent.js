import React from 'react';
import styles from './AddEvent.module.css';
import { connect } from 'react-redux';
import Spinner from '../../componentsStateless/spinner/Spinner'; 

class AddEvent extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false
		};
	}

	render = () => {
		return (
            <form id={styles.newEventForm}>
				<h1>Nowe wydarzenie w grupie Militaria</h1>
				<input id={styles.eventNameInput} placeholder="Podaj nazwę wydarzenia" />
				<div id={styles.eventDetailsFlex}>
					<div id={styles.dateTime} className={styles.whiteRounded}>
						<h3>Wprowadź datę i godzinę</h3>
						<input type="date" />
						<input type="time" />
					</div>
					<div id={styles.descMap} className={styles.whiteRounded}>
						<textarea placeholder="Wprowadź opis wydarzenia" rows="3"></textarea>
						<h2>Wybierz miejsce wydarzenia</h2>
						<div id={styles.map}>
							<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxkUBy154kYRD8JUzyaBahA&key=AIzaSyAe_x-NCWFqmMdoudhr8pBb7QhJo8p0y9s"
							 allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<input type="submit" value="Utwórz" />
			</form>
		);
	}
};
export default AddEvent;