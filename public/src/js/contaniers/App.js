import App from "../components/App";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {name: state.App.name};
};

export default connect(mapStateToProps)(App);