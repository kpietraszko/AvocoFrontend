import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import user from './userReducer';
import profile from './profileReducer';
import group from './groupReducer';

export default combineReducers({ authentication, user, profile, group });