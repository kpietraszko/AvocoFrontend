import jwt_decode from 'jwt-decode';
import axios from 'axios';

const initialState = {
    user: {
        isAuthorized: false
    }

};
export default (state = initialState, action) => { //state bedzie initialState jesli nie przekaze sie pierwszego argumentu lub jesli bedzie on undefined
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
            }
        case "UNAUTHORIZE":
            axios.defaults.headers.common['Authorization'] = "";
            return {
                ...state,
                user: {
                    isAuthorized: false,
                    userId: undefined,
                    token: undefined
                }
            }
        default:
            return state
    }
}