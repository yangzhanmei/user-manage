import React from 'react';

export default class ShowUsers extends React.Component {
    componentWillMount() {
        this.props.showUsers();
    }

    render() {
        const userList = this.props.userList.map((val, index) => {
            return <div key={index}>
                {val.name}
            </div>
        });

        return (<div>
            {userList}
        </div>)
    }
}