import request from "superagent";

export default store => next => action => {
    if (action.type === "SHOWUSERS") {
        request.get('/getUsers')
            .end((err, res) => {
                next({type: action.type, userList: res.body});
            })
    }

    else {
        next(action);
    }
}