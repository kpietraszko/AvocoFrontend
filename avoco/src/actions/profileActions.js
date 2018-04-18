export const actionTypes = {
	setUserDetails: "SET_USER_DETAILS",
	setProfilePhoto: "SET_PROFILE_PHOTO",
	setIsLoggedProfile: "SET_IS_LOGGED_PROFILE",
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
	setIsLoggedProfile: (isLoggedProfile) => ({
		type: actionTypes.setIsLoggedProfile,
		isLoggedProfile
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