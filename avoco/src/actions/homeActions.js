export const actionTypes = {
	setFeedPosts: "SET_FEED_POSTS"
}
export const actionCreators = {
	setFeedPosts: (posts) => ({
		type: actionTypes.setFeedPosts,
		posts
	})
}