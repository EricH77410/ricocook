import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// Router
import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore'
import { login, logout } from './actions/auth';
import { startLoadRecipes } from './actions/recipesAction'
import Loading from './components/Loading';

import { firebase } from './firebase/firebase';

// Style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const state = store.getState()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<Loading/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startLoadRecipes())
        .then(()=>{
            renderApp();
            if (history.location.pathname==='/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});
