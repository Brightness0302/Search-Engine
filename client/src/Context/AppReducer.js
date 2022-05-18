export default (state, action) => {
    switch(action.type) {
        case 'Add_User':
            return {
                ...state,
                userProfile: [action.payload, ...state.userProfile],
                loggedOut: false
            }
        default:
            return state;
    }
}