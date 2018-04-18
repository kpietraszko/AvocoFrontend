export const actionTypes = {
	setUserDetails: "SET_USER_DETAILS",
	setProfilePhoto: "SET_PROFILE_PHOTO",
	setIsSelf: "SET_IS_SELF",
	setIsFriend: "SET_IS_FRIEND",
	setInterests: "SET_INTERESTS",
	setGroups: "SET_GROUPS",
}
export const actionCreators = {
	setUserDetails: (firstName, lastName, region) => ({
		type: actionTypes.setUserDetails,
		firstName,
		lastName,
		region	
	}),
	setProfilePhoto: (photoUrl) => ({
		type: actionTypes.setProfilePhoto,
		photoUrl
	}),
	setIsSelf: (isSelf) => ({
		type: actionTypes.setIsSelf,
		isSelf
	}),
	setIsFriend: (isFriend) => ({
		type: actionTypes.setIsFriend,
		isFriend
	}),
	setInterests: (interests) => ({
		type: actionTypes.setInterests,
		interests
	}),
	setGroups: (groups) => ({
		type: actionTypes.setGroups,
		groups
	})
}