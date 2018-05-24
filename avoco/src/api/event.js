import axios from 'axios';

export const createApi = (form, groupId, location) => {
	const formData = new FormData();
	formData.append("EventName", form.eventName.value);
	formData.append("EventDescription", form.eventDescription.value);
	const dateTime = new Date(form.dateInput.value + "T" + form.timeInput.value).toISOString();
	formData.append("EventDateTime", dateTime);
	formData.append("EventLocationLat", parseFloat(location.lat));
	formData.append("EventLocationLng", parseFloat(location.lng));
	console.log(location);
	return axios.post(`/event/Create/${groupId}`, formData);
}