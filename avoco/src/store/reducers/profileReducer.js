//dotyczy obecnie przeglądanego profilu
import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/profileActions';
import { profileInitial } from '../initialState';

export default handleActions({
}, profileInitial);