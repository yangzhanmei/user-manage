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

    setTag() {
        let data = this.props.users.addResult;
        if (this.tag) {
            if (data === "success") {
                this.tag.innerHTML = "添加成功";
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            }
            if (data === "fail") {
                this.tag.innerHTML = "添加失败，请重新添加";
            }
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
                    <button className="btn btn-warning">修改</button>
                </td>
                <td>
                    <button className="btn btn-danger">删除</button>
                </td>
            </tr>
        });

        return (<div>
            {this.setTag()}
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
            <div className="modal fade bs-example-modal-lg" id="addUserModal" ref="Modal" role="dialog"
                 aria-hidden="true">
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
        </div>)
    }
}