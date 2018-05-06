//dotyczy obecnie przegladanej grupy
import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/groupActions';
import { groupInitial } from '../initialState';

export default handleActions({
	[actionTypes.setGroupInfo]: (state, action) => ({
		...state,
		id: action.id,
		groupName: action.groupName,
		groupDescription: action.groupDescription
	}),
	[actionTypes.setGroupInterests]: (state, action) => ({
		...state,
		interests: action.interests
	}),
	[actionTypes.setGroupImage]: (state, action) => ({
		...state,
		imageUrl: action.imageUrl
	}),
	[actionTypes.setGroupPosts]: (state, action) => ({
		...state,
		posts: action.posts
	}),
	[actionTypes.setJoined]: (state, action) => ({
		...state,
		joined: action.joined
	})
}, groupInitial);