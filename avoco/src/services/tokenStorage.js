import setAuthorizationHeader from '../services/setAuthorizationHeader';

export const saveToken = (token) => {
	localStorage.setItem("token", token);
}
export const readToken = () => {
	const token =  localStorage.getItem("token");
	if(token)
		setAuthorizationHeader(token);
	return token;
}
export const removeToken = () => {
	localStorage.removeItem("token");
}