import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import user from './userReducer';
import profile from './profileReducer';
import group from './groupReducer';
import home from './homeReducer';
import groupList from './groupListReducer';
import event from './eventReducer';
import { actionTypes } from '../../actions/authenticationActions'

const rootReducer = combineReducers({ authentication, user, profile, group, home, groupList, event })
export default (state, action) => {
	if (action.type === actionTypes.unauthorize) {
		state = undefined
	  }
	  return rootReducer(state, action);
};