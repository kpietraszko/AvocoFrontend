import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/homeActions';
import { homeInitial } from '../initialState';


export default handleActions({
	[actionTypes.setFeedPosts]: (state, action) => ({
		...state,
		posts: action.posts
	})
}, homeInitial);