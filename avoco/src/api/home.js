import axios from 'axios';

export const getFeedApi = () => {
	return axios.get(`/home/feed`);
}