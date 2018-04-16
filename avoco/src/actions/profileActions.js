export const actionTypes = {
	saveUserDetails: "SAVE_USER_DETAILS"
}
export const actionCreators = {
	saveUserDetails: (firstName, lastName, region) => ({
		type: actionTypes.saveUserDetails,
		firstName,
		lastName,
		region	
	})
}