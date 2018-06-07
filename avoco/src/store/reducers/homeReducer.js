import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/homeActions';
import { homeInitial } from '../initialState';


export default handleActions({
	[actionTypes.setFeedPosts]: (state, action) => ({
		...state,
		posts: action.posts
	}),
	[actionTypes.getAllEvents]: (state, action) => ({
		...state,
		events: action.events
	}),
}, homeInitial);