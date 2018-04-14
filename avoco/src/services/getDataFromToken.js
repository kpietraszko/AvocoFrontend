import jwt_decode from 'jwt-decode';
import claimTypes from '../api/claimTypes';

export default (token) => {
	const decodedToken = jwt_decode(token);
	return {
		userId: parseInt(decodedToken[claimTypes.userId])
	};
};