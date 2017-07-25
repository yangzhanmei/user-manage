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
    if (action.type === "MODIFYUSER") {
        request.post("/modifyUser")
            .send({
                id: action.id,
                user: action.user,
                name: action.name,
                age: action.age,
                sex: action.sex,
                tel: action.tel,
                email: action.email,
                tip: action.tip
            })
            .end((err, res) => {
                next({type: action.type, modifyResult: res.text});
            })
    }

    if (action.type === "DELETEUSER") {
        request.post("/deleteUser")
            .send({
                id: action.id
            })
            .end((err, res) => {
                next({type: action.type, deleteResult: res.text});
            })
    }

    if (action.type === "FINDUSER") {
        request.post("/findUser")
            .send({
                user: action.user
            })
            .end((err, res) => {
                next({type: action.type, userList: res.body});
            })
    }

    else {
        next(action);
    }
}