export default (state = {userList: []}, action) => {
    if (action.type === "SHOWUSERS") {

        return Object.assign({}, state, {userList: action.userList});
    }
    if (action.type === "ADDUSER") {

        return Object.assign({}, state, {addResult: action.addResult});
    }
    return state;
}