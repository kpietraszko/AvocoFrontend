export const actionTypes = {
	setEventDetails: "SET_EVENT_DETAILS",
	setInterestedUsers: "SET_INTERESTED_USERS",
	setEventGroupImage: "SET_EVENT_GROUP_IMAGE"
};

export const actionCreators = {
	setEventDetails: (eventDetails) => ({
		type: actionTypes.setEventDetails,
		eventDetails
	}),
	setInterestedUsers: (interestedUsers) => ({
		type: actionTypes.setInterestedUsers,
		interestedUsers
	}),
	setEventGroupImage: (groupImage) => ({
		type: actionTypes.setEventGroupImage,
		groupImage
	})
};