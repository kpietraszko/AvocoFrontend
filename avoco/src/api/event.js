import axios from 'axios';

export const createApi = (form, groupId, lat, lng) => {
	const formData = new FormData();
	formData.append("EventName", form.eventName.value);
	formData.append("EventDescription", form.eventDescription.value);
	const dateTime = new Date(form.dateInput + "T" + form.timeInput);
	formData.append("EventDateTime", dateTime);
	formData.append("EventLocationLat", lat);
	formData.append("EventLocationLng", lng);
	
	axios.post(`/event/Create/${groupId}`, formData)
}