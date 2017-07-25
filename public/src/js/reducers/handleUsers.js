export default (state = {userList: []}, action) => {
    if (action.type === "SHOWUSERS") {

        return Object.assign({}, state, {userList: action.userList});
    }
    if (action.type === "ADDUSER") {

        return Object.assign({}, state, {addResult: action.addResult});
    }
    if (action.type === "MODIFYUSER") {

        return Object.assign({}, state, {modifyResult: action.modifyResult});
    }
    if (action.type === "DELETEUSER") {

        return Object.assign({}, state, {deleteResult: action.deleteResult});
    }
    return state;
}