export const actionTypes = {
	saveTokenData: "SAVE_TOKEN_DATA",
	updateName: "UPDATE_NAME",
	setPhoto: "SET_PHOTO", //zdjecie zalogowanego uzytkownika z serwera, do navbara
	updateRegion: "UPDATE_REGION",
	updateFriends: "UPDATE_FRIENDS",
	setFriendPhoto: "SET_FRIEND_PHOTO",
	updateGroups: "UPDATE_GROUPS"
}

export const actionCreators = {
	saveTokenData: (data) => ({
		type: actionTypes.saveTokenData,
		...data
	}),
	updateName: (newFirstName, newLastName) => ({
		type: actionTypes.updateName,
		newFirstName,
		newLastName
	}),
	setPhoto: (photoUrl) => ({
		type: actionTypes.setPhoto,
		photoUrl
	}),
	updateRegion: (newRegion) => ({
		type: actionTypes.updateRegion,
		newRegion
	}),
	updateFriends: (friends) => ({
		type: actionTypes.updateFriends,
		friends
	}),
	setFriendPhoto: (userId, photoUrl) =>({
		type: actionTypes.setFriendPhoto,
		userId,
		photoUrl
	}),
	updateGroups: (groups) => ({
		type: actionTypes.updateGroups,
		groups
	})
}