export const actionType = {
    USER_INFO: "USER_INFO"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.USER_INFO:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer;