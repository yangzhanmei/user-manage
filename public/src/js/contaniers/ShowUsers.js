import {connect} from 'react-redux';
import ShowUsers from '../components/ShowUsers';

const mapStateToProps = (state) => {
    return {userList: state.ShowUsers.userList};
};

const mapDispatchToProps = (dispatch) => {
    return {
        showUsers: () => {
            dispatch({type: "SHOWUSERS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);