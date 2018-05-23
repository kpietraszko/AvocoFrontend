export const actionTypes = {
	setGroupList: "SET_GROUP_LIST"
}
export const actionCreators = {
	setGroupList: (groups) => ({
		type: actionTypes.setGroupList,
		groups
	})
}