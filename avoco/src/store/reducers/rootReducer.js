import authentication from './authenticationReducer';
import user from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({ authentication, user });


