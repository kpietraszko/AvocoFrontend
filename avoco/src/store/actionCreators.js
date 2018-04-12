import axios from 'axios';

export default {
    authorize: (token) => {
        return {
            type: "AUTHORIZE",
            token
        }
    },
    unauthorize: () => ({
        type: "UNAUTHORIZE"
    }),
    updateName: (newFullName) => ({
        type: "UPDATE_NAME",
        newFullName
    })
}