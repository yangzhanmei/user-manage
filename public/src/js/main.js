import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';

import ShowUsers from './contaniers/ShowUsers';
import AddUser from './contaniers/AddUser';

import reducer from './reducers/index';

import showUsers from './middlewares/showUsers';
import addUser from './middlewares/addUser';

const middleware = applyMiddleware(showUsers, addUser);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ShowUsers}/>
            </Route>
            <Route path="/addUser" component={AddUser}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);