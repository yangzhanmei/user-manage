import React from 'react';
import {Link} from 'react-redux';

export default class AddUser extends React.Component {
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
        let data = this.props.data;
        if (this.tag) {
            if (data === "success") {
                this.tag.innnerHTML = "添加成功";
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000)
            }
            else {
                this.tag.innnerHTML = "添加失败，请重新添加";
            }
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入用户名" ref={(user) => this.user = user}/>
                <input type="text" placeholder="请输入姓名" ref={(name) => this.name = name}/>
                <input type="text" placeholder="请输入年龄" ref={(age) => this.age = age}/>
                <select defaultValue="女" ref={(sex) => this.sex = sex}>
                    <option>女</option>
                    <option>男</option>
                </select>
                <input type="text" placeholder="请输入电话" ref={(tel) => this.tel = tel}/>
                <input type="text" placeholder="请输入电子邮件" ref={(email) => this.email = email}/>
                <input type="text" placeholder="请输入备注" ref={(tip) => this.tip = tip}/>
                <button onClick={this.submitUser.bind(this)}>增加用户</button>
                {this.setTag()}
                <div ref={(tag) => this.tag = tag}></div>
            </div>
        )
    }
}