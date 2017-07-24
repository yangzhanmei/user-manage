import {connect} from 'react-redux';
import Hello from '../components/Hello';

const mapStateToProps = (state) => {
    return {name: state.Hello.name};
};

export default connect(mapStateToProps)(Hello);