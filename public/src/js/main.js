import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';

import HandleUsers from './contaniers/HandleUsers';

import reducer from './reducers/index';

import handleUsers from './middlewares/handleUsers';

const middleware = applyMiddleware(handleUsers);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HandleUsers}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);