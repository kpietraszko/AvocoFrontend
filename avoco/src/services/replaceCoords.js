import { getDataFromCoords } from '../api/maps';

export default (events) => {
	let promises = [];
	for (let event of events) {
		let promise = getDataFromCoords(event.eventLocationLat, event.eventLocationLng)
			.then((response) => {
				console.log("got place name");
				let placeData = response.data;
				event.place = placeData.results[0].address_components[2].short_name;
			})
		promises.push(promise);
	}
	return Promise.all(promises)
		.then(() => events);
}