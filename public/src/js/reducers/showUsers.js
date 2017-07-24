export default (state = {userList: []}, action) => {
    if (action.type === "SHOWUSERS") {
        return {userList: action.userList};
    }
    return state;
}