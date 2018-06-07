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
export const getDetailsApi = (eventId) => {
	return axios.get(`/event/${eventId}`);
}
export const getInterestedUsersApi = (eventId) => {
	return axios.get(`/event/${eventId}/interestedUsers`);
}
export const getGroupImageApi = (eventId) => {
	return axios.get(`/event/${eventId}/groupImage`);
}
export const setInterestedApi =(eventId, interested) => {
	return axios.put(`/event/${eventId}/interested/${interested}`);
}
export const getEventCommentsApi = (eventId) => {
	return axios.get(`/event/${eventId}/comments`);
}
export const addCommentApi = (eventId, comment) => {
	const form = new FormData();
	form.append("comment", comment);
	return axios.post(`/event/${eventId}/addComment`, form);
}