import axios from 'axios';

export const createApi = (form, groupId, location) => {
	const formData = new FormData();
	formData.append("EventName", form.eventName.value);
	formData.append("EventDescription", form.eventDescription.value);
	const dateTime = new Date(form.dateInput.value + "T" + form.timeInput.value).toISOString();
	formData.append("EventDateTime", dateTime);
	formData.append("EventLocationLat", location.lat);
	formData.append("EventLocationLng", location.lng);
	
	return axios.post(`/event/Create/${groupId}`, formData);
}