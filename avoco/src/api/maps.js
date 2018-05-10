import axios from 'axios';

export const getDataFromCoords = (lat, lng) => {
	return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCyt7Cm0f5xzCCPfoPogkBlcH6ttk1nOAs&language=pl&region=PL`,
		{
			transformRequest: [(data, headers) => {
				delete headers.common.Authorization;
				return data;
			}]
		});
}