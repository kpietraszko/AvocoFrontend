export default {
    exampleAction: (payload) => ({
        type: "EXAMPLE",
            payload
    }),
    authorize: (token) => ({
        type: "AUTHORIZE",
        token
    }),
    unauthorize: () => ({
        type: "UNAUTHORIZE"
    })
}