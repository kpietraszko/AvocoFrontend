import jwt_decode from 'jwt-decode';
import axios from 'axios';

const initialState = {
    user: {
        isAuthorized: false
    }

};
export default (state = initialState, action) => {
    switch (action.type) {
        case "AUTHORIZE":
            var decoded = jwt_decode(action.token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + action.token;
            return {
                ...state,
                user: {
                    isAuthorized: true,
                    userId: parseInt(decoded.userId),
                    token: action.token
                }
            };
        case "UNAUTHORIZE":
            axios.defaults.headers.common['Authorization'] = "";
            return {
                ...state,
                user: {
                    isAuthorized: false,
                    userId: undefined,
                    token: undefined
                }
            };
        case "UPDATE_NAME":
            return {
                ...state,
                user: {
                    ...state.user,
                    fullName: action.newFullName
                }
            };
        default:
            return state
    }
}