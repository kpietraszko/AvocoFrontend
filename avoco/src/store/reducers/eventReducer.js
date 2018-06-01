import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/eventActions';
import { eventInitial } from '../initialState';

export default handleActions({
	[actionTypes.setEventDetails]: (state, action) => ({
		...state,
		...action.eventDetails
	}),
	[actionTypes.setInterestedUsers]: (state, action) => ({
		...state,
		interestedUsers: action.interestedUsers
	}),
	[actionTypes.setEventGroupImage]: (state, action) => ({
		...state,
		groupImage: action.groupImage
	})
}, eventInitial);