import React from 'react';

export default class ShowUsers extends React.Component {
    componentWillMount() {
        this.props.showUsers();
    }

    render() {
        const userList = this.props.userList.map((val, index) => {
            return <tr key={index}>
                <td>{val.user}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.sex}</td>
                <td>{val.tel}</td>
                <td>{val.email}</td>
                <td>{val.tip}</td>
            </tr>
        });

        return (<div>
            <table>
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>电话</th>
                    <th>电子邮件</th>
                    <th>备注</th>
                </tr>
                </thead>
                <tbody>
                {userList}
                </tbody>
            </table>
        </div>)
    }
}