import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/authenticationActions';
import { authenticationInitial } from '../initialState';

export default handleActions({
	[actionTypes.authorize]: (state, action) => ({
		isAuthorized: true,
		token: action.token
	}),
	[actionTypes.unauthorize]: () => ({
		isAuthorized: false
	})
}, authenticationInitial);