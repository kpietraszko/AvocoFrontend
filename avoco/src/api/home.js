import axios from 'axios';

export const getFeedApi = () => {
	return axios.get(`/api/home/feed`);
}