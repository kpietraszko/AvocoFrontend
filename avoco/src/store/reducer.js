const initialState = {
    isAuthorized: false //temp
};
export default (state = initialState, action) => { //state bedzie initialState jesli nie przekaze sie pierwszego argumentu lub jesli bedzie on undefined
    switch (action.type) {
        case "AUTHORIZE":
            return {
                ...state,
                isAuthorized: true,
                token: action.token
            }
        default:
            return state
    }
}