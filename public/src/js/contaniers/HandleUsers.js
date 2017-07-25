import {connect} from 'react-redux';
import HandleUsers from '../components/HandleUsers';

const mapStateToProps = (state) => {
    return {users: state.HandleUsers};
};

const mapDispatchToProps = (dispatch) => {
    return {
        showUsers: () => {
            dispatch({type: "SHOWUSERS"});
        },
        addUser: (user, name, age, sex, tel, email, tip) => {
            dispatch({type: "ADDUSER", user, name, age, sex, tel, email, tip});
        },
        modifyUser: (id, user, name, age, sex, tel, email, tip) => {
            dispatch({type: "MODIFYUSER", id, user, name, age, sex, tel, email, tip});
        },
        deleteUser: (id) => {
            dispatch({type: "DELETEUSER", id});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleUsers);