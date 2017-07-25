import {connect} from 'react-redux';
import AddUsers from '../components/AddUser';

const mapStateToProps = (state) => {

    return {data: state.AddUser.data};
};

const mapDispatchToProps = (dispatch) => {

    return {
        addUser: (user, name, age, sex, tel, email, tip) => {
            dispatch({type: "ADDUSER", user, name, age, sex, tel, email, tip});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);