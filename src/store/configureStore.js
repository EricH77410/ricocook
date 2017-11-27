import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// Import reducers
import recipeReducer from '../reducers/recipeReducer';
import filterReducer from '../reducers/filterReducer';

import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
            recipes: recipeReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}


