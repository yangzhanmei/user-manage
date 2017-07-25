import request from "superagent";

export default store => next => action => {
    if (action.type === "SHOWUSERS") {
        request.get('/getUsers')
            .end((err, res) => {
                next({type: action.type, userList: res.body});
            })
    }

    if (action.type === "ADDUSER") {
        request.post("/addUser")
            .send({
                user: action.user,
                name: action.name,
                age: action.age,
                sex: action.sex,
                tel: action.tel,
                email: action.email,
                tip: action.tip
            })
            .end((err, res) => {
                next({type: action.type, addResult: res.text});
            })
    }

    else {
        next(action);
    }
}