import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import App from './components/App';

import Hello from './contaniers/Hello';

import reducer from "./reducers/index";

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Hello}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);