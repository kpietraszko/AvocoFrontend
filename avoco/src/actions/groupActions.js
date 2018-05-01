export const actionTypes = {
	setGroupInfo: "SET_GROUP_INFO",
	setGroupInterests: "SET_GROUP_INTERESTS",
	setGroupImage: "SET_GROUP_IMAGE"
};

export const actionCreators = {
	setGroupInfo: (id, groupName, groupDescription) => ({
		type: actionTypes.setGroupInfo,
		id,
		groupName,
		groupDescription
	}),
	setGroupInterests: (interests) => ({
		type: actionTypes.setGroupInterests,
		interests
	}),
	setGroupImage: (imageUrl) => ({
		type: actionTypes.setGroupImage,
		imageUrl
	})
};
