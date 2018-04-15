import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/userActions';
import { userInitial } from '../initialState';

export default handleActions({
	[actionTypes.saveTokenData]: (state, action) => ({
		...state,
		userId: action.userId
	}),
	[actionTypes.updateName]: (state, action) => ({
		...state,
		firstName: action.newFirstName,
		lastName: action.newLastName
	}),
	[actionTypes.updateRegion]: (state, action) => ({
		...state,
		region: action.newRegion
	}),
	[actionTypes.updateFriends]: (state, action) => ({
		...state,
		friends: action.friends
	}),
	[actionTypes.updateGroups]: (state, action) => ({
		...state,
		groups: action.groups
	}),
	[actionTypes.updatePhoto]: (state, action) => ({
		photoUrl: action.photoUrl
	})
}, userInitial);

