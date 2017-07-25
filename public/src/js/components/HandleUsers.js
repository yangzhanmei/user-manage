import React from 'react';

export default class ShowUsers extends React.Component {
    componentWillMount() {
        this.props.showUsers();
    }

    submitUser() {
        let user = this.user.value;
        let name = this.name.value;
        let age = this.age.value;
        let sex = this.sex.value;
        let tel = this.tel.value;
        let email = this.email.value;
        let tip = this.tip.value;

        if (user === "" || name === "" || age === "" || sex === "" ||
            tel === "" || email === "" || tip === "") {
            this.tag.innerHTML = "信息不完整，请补充";
        }
        else {
            this.props.addUser(user, name, age, sex, tel, email, tip);
        }
    }

    modify(val) {
        this.refs.id.value = val.id;
        this.refs.user.value = val.user;
        this.refs.name.value = val.name;
        this.refs.age.value = val.age;
        this.refs.sex.value = val.sex;
        this.refs.tel.value = val.tel;
        this.refs.email.value = val.email;
        this.refs.tip.value = val.tip;
    }

    modifyUser() {
        const id = this.refs.id.value;
        const user = this.refs.user.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const sex = this.refs.sex.value;
        const tel = this.refs.tel.value;
        const email = this.refs.email.value;
        const tip = this.refs.tip.value;

        this.props.modifyUser(id, user, name, age, sex, tel, email, tip);
    }

    setTag() {
        const addResult = this.props.users.addResult;
        const modifyResult = this.props.users.modifyResult;
        if (this.tag) {
            if (addResult === "success") {
                this.tag.innerHTML = "添加成功";
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            }
            if (addResult === "fail") {
                this.tag.innerHTML = "添加失败，请重新添加";
            }
            if (modifyResult === "success") {
                this.tag.innerHTML = "修改成功";
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            }
            if (modifyResult === "fail") {
                this.tag.innerHTML = "修改失败，请重新修改";
            }
        }
    }

    deleteUser(id) {
        const ifDelete = confirm("确定删除?");
        if (ifDelete) {
            this.props.deleteUser(id);
        }
    }

    judgeDelete() {
        const deleteResult = this.props.users.deleteResult;
        if (deleteResult === "success") {
            window.location.href = '/';
            alert("删除成功！");
        }
        if (deleteResult === "fail") {
            alert("删除失败，请重新删除！")
        }
    }

    render() {
        const userList = this.props.users.userList.map((val, index) => {
            return <tr key={index}>
                <td>{val.id}</td>
                <td>{val.user}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.sex}</td>
                <td>{val.tel}</td>
                <td>{val.email}</td>
                <td>{val.tip}</td>
                <td>
                    <button className="btn btn-warning" data-toggle="modal" data-target="#modifyUserModal"
                            onClick={this.modify.bind(this, val)}>修改
                    </button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteUser.bind(this, val.id)}>删除</button>
                </td>
            </tr>
        });

        return (<div>
            {this.setTag()}
            {this.judgeDelete()}
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>用户名</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>电话</th>
                        <th>电子邮件</th>
                        <th>备注</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList}
                    </tbody>
                </table>
                <button className="btn btn-info" data-toggle="modal" data-target="#addUserModal">增加用户</button>
            </div>
            <div className="modal fade bs-example-modal-lg" id="addUserModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">添加人员</h4>
                        </div>
                        <div>
                            <div className="inputText">
                                <span>用户名</span>
                                <input type="text" ref={(user) => this.user = user} placeholder="请输入用户名"/>
                            </div>
                            <div className="inputText">
                                <span>姓名</span>
                                <input type="text" ref={(name) => this.name = name} placeholder="请输入姓名"/>
                            </div>
                            <div className="inputText">
                                <span>年龄</span>
                                <input type="number" ref={(age) => this.age = age} placeholder="请输入年龄"/>
                            </div>
                            <div className="inputText">
                                <span>性别</span>
                                <select ref={(sex) => this.sex = sex}>
                                    <option>女</option>
                                    <option>男</option>
                                </select>
                            </div>
                            <div className="inputText">
                                <span>电话</span>
                                <input type="text" ref={(tel) => this.tel = tel} placeholder="请输入11位电话"/>
                            </div>
                            <div className="inputText">
                                <span>邮箱</span>
                                <input type="text" ref={(email) => this.email = email} placeholder="请输入邮箱"/>
                            </div>
                            <div className="inputText">
                                <span>备注</span>
                                <input type="text" ref={(tip) => this.tip = tip} placeholder="请输入备注"/>
                            </div>
                            <div ref={(tag) => this.tag = tag}></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={this.submitUser.bind(this)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade bs-example-modal-lg" id="modifyUserModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">修改人员信息</h4>
                        </div>
                        <div>
                            <div className="inputText">
                                <span>序号</span>
                                <input type="text" ref="id" readOnly="true"/>
                            </div>
                            <div className="inputText">
                                <span>用户名</span>
                                <input type="text" ref="user"/>
                            </div>
                            <div className="inputText">
                                <span>姓名</span>
                                <input type="text" ref="name"/>
                            </div>
                            <div className="inputText">
                                <span>年龄</span>
                                <input type="number" ref="age"/>
                            </div>
                            <div className="inputText">
                                <span>性别</span>
                                <select ref="sex">
                                    <option>女</option>
                                    <option>男</option>
                                </select>
                            </div>
                            <div className="inputText">
                                <span>电话</span>
                                <input type="text" ref="tel"/>
                            </div>
                            <div className="inputText">
                                <span>邮箱</span>
                                <input type="text" ref="email"/>
                            </div>
                            <div className="inputText">
                                <span>备注</span>
                                <input type="text" ref="tip"/>
                            </div>
                            <div ref={(tag) => this.tag = tag}></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={this.modifyUser.bind(this)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}