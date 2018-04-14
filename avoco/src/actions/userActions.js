export const actionTypes = {
	saveTokenData: "SAVE_TOKEN_DATA",
	updateName: "UPDATE_NAME",
	updateFriends: "UPDATE_FRIENDS",
	updateGroups: "UPDATE_GROUPS",
	updatePhoto: "UPDATE_PHOTO",
	updateRegion: "UPDATE_REGION"
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
	updateRegion: (newRegion) => ({
		type: actionTypes.updateRegion,
		newRegion
	}),
	updateFriends: (friends) => ({
		type: actionTypes.updateFriends,
		friends
	}),
	updateGroups: (groups) => ({
		type: actionTypes.updateGroups,
		groups
	}),
	updatePhoto: (photoUrl) => ({
		type: actionTypes.updatePhoto,
		photoUrl
	})
}