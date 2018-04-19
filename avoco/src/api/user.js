import axios from 'axios';

export const getUserInfo = (userId) => {
	return axios.get(`/user/${userId}/userInfo`);
};
export const getFriends = () => {
	return axios.get("/user/friends");
};
export const getGroups = (userId) => {
	return axios.get(`/user/${userId}/groups`);
};
export const getInterests = (userId) => {
	return axios.get(`/user/${userId}/interests`);
};
export const getPhoto = (userId, small) => {
	return axios.get(`/user/${userId}/photo${small ? "/small":""}`, { responseType: "blob" })
};
export const addFriend = (userId) => {
	return axios.put(`/user/${userId}/AddFriend/`)
}
export const unfriend = (userId) => {
	return axios.put(`/user/${userId}/Unfriend/`)
}
export const setName = (names) => {
	return axios({
		url: "/user/UserInfo",
		method: "put",
		params: {
			firstName: names[0],
			lastName: names[1]
		}
	});
}
export const setRegion = (region) => {
	return axios({
		url: "/user/UserInfo",
		method: "put",
		params: {
			region
		}
	});
}
export const setPhoto = (formData) => {
	return axios.put("/user/Photo", formData);
}
export const searchInterests = (searchText) => {
	return axios.get(`/user/SearchInterests/${searchText}`);
}
export const addInterest = (interestIdOrName) => {
	return axios.post(`/user/AddInterest/${interestIdOrName}`);
}