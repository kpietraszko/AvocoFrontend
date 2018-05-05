import base64ToImageUrl from './base64ToImageUrl';

export default (posts) => {
	for (let post of posts) {
		post.userImage = base64ToImageUrl(post.userImage);
		for (let comment of post.postComments) {
			comment.userImage = base64ToImageUrl(comment.userImage);
		}
	}
}