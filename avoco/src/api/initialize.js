import axios from 'axios';

export default () => {
	axios.defaults.baseURL = "http://localhost:5000/api" 
};