import { getPhoto } from '../api/user';

export default (users, setFriendPhoto) => {

	for(let user of users)
	{
		getPhoto(user.id, "small")
			.then((response) => {
				setFriendPhoto(user.id, URL.createObjectURL(response.data));
			})
			.catch(() => {
			});
	}
}