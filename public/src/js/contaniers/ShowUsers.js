import {connect} from 'react-redux';
import ShowUsers from '../components/ShowUsers';

const mapStateToProps = (state) => {
    return {users: state.ShowUsers};
};

const mapDispatchToProps = (dispatch) => {
    return {
        showUsers: () => {
            dispatch({type: "SHOWUSERS"});
        },
        addUser: (user, name, age, sex, tel, email, tip) => {
            dispatch({type: "ADDUSER", user, name, age, sex, tel, email, tip});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);