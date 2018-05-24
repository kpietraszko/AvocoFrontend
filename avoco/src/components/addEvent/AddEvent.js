import React, { Component } from 'react';
import styles from './AddEvent.module.css';
import { connect } from 'react-redux';
import Spinner from '../../componentsStateless/spinner/Spinner';
import LocationPicker from 'react-location-picker';

const defaultPosition = {
	lat: 27.9878,
	lng: 86.9250
};

class AddEvent extends Component {
	state = {
		address: "",
		position: ""
	}

	handleLocationChange = ({ position, address }) => {
		this.setState({ position, address });
	}

	render = () => {
		return (
			<form id={styles.newEventForm}>
				<h1>Nowe wydarzenie w grupie Militaria</h1>
				<input id={styles.eventNameInput} placeholder="Podaj nazwę wydarzenia" required />
				<div id={styles.eventDetailsFlex}>
					<div id={styles.dateTime}>
						<h3>Wprowadź datę i godzinę</h3>
						<input type="date" />
						<input type="time" />
					</div>
					<div id={styles.descMap}>
						<textarea placeholder="Wprowadź opis wydarzenia" rows="3" ></textarea>
					</div>
				</div>
				<h2 id={styles.mapHeader}>Wybierz miejsce wydarzenia</h2>
				<h3>{this.state.address}</h3>
				<LocationPicker
					containerElement={<div id={styles.map} />}
					mapElement={<div id={styles.mapSize} />}
					defaultPosition={defaultPosition}
					onChange={this.handleLocationChange}
					radius={-1}
				/>
				<input id={styles.createEventButton} className="submitButtonGreen" type="submit" value="Utwórz" />
			</form>
		);
	}
};
export default AddEvent;
//<div id={styles.map} >
//	<iframe id={styles.mapSize} frameborder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxkUBy154kYRD8JUzyaBahA&key=AIzaSyAe_x-NCWFqmMdoudhr8pBb7QhJo8p0y9s"
//		allowfullscreen></iframe>
//</div>
