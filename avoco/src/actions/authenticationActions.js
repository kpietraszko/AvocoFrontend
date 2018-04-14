export const actionTypes = {
	authorize: "AUTHORIZE",
	unauthorize: "UNAUTHORIZE"
}

export const actionCreators = {
	authorize: (token) => ({
			type: actionTypes.authorize,
			token
	}),
	unauthorize: () => ({
		type: actionTypes.unauthorize
	})
}