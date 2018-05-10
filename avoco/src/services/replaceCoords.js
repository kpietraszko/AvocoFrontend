import { getDataFromCoords } from '../api/maps';

export default (events) => {
	for (let event of events) {
		getDataFromCoords(event.eventLocationLat, event.eventLocationLng)
			.then((response) => {
				let placeData = response.data;
				event.place = placeData.results[0].address_components[2].short_name;
			})
	}
}