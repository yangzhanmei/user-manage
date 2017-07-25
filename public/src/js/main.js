import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';

import ShowUsers from './contaniers/ShowUsers';

import reducer from './reducers/index';

import showUsers from './middlewares/showUsers';

const middleware = applyMiddleware(showUsers);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ShowUsers}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);