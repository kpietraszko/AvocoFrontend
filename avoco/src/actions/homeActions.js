export const actionTypes = {
	setFeedPosts: "SET_FEED_POSTS",
	getAllEvents: "GET_ALL_EVENTS"
}
export const actionCreators = {
	setFeedPosts: (posts) => ({
		type: actionTypes.setFeedPosts,
		posts
	}),
	getAllEvents: (events) => ({
		type: actionTypes.getAllEvents,
		events
	})
};