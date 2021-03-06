export const actionTypes = {
	setGroupInfo: "SET_GROUP_INFO",
	setGroupInterests: "SET_GROUP_INTERESTS",
	setGroupImage: "SET_GROUP_IMAGE",
	setGroupPosts: "SET_GROUP_POSTS",
	setJoined: "SET_JOINED",
	setGroupEvents: "SET_GROUP_EVENTS",
	clearGroupData: "CLEAR_GROUP_DATA"
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
	}),
	setGroupPosts: (posts) => ({
		type: actionTypes.setGroupPosts,
		posts
	}),
	setJoined: (joined) => ({
		type: actionTypes.setJoined,
		joined
	}),
	setGroupEvents: (events) => ({
		type: actionTypes.setGroupEvents,
		events
	}),
	clearGroupData: () => ({
		type: actionTypes.clearGroupData
	})
};
