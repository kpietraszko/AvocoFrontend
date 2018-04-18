//dotyczy obecnie przeglądanego profilu
import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/profileActions';
import { profileInitial } from '../initialState';

export default handleActions({
	[actionTypes.setUserDetails] : (state, action) => ({
		...state,
		firstName: action.firstName,
		lastName: action.lastName,
		region: action.region
	}),
	[actionTypes.setProfilePhoto] : (state, action) => ({
		...state,
		photoUrl: action.photoUrl
	}),
	[actionTypes.setIsSelf] : (state, action) => ({
		...state,
		isSelf: action.isSelf
	}),
	[actionTypes.setIsFriend] : (state, action) => ({
		...state,
		isFriend: action.isFriend
	}),
	[actionTypes.setInterests] : (state, action) => ({
		...state,
		interests: action.interests
	}),
	[actionTypes.setGroups] : (state, action) => ({
		...state,
		groups: action.groups
	})
}, profileInitial);