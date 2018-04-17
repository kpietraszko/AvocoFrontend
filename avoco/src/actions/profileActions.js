export const actionTypes = {
	setUserDetails: "SET_USER_DETAILS",
	setIsSelf: "SET_IS_SELF",
	setIsFriend: "SET_IS_FRIEND",
	setInterests: "SET_INTERESTS",
	setGroups: "SET_GROUPS"
}
export const actionCreators = {
	setUserDetails: (firstName, lastName, region) => ({
		type: actionTypes.setUserDetails,
		firstName,
		lastName,
		region	
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