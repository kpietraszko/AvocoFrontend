import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/groupListActions';
import { groupListInitial } from '../initialState';

export default handleActions({
	[actionTypes.setGroupList]: (state, action) => ({
		...state,
		groups: action.groups
	})
}, groupListInitial);

