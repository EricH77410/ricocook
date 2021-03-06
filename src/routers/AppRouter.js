
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

// Components
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import Admin from '../components/Admin';
import EditRecipe from '../components/recipes/EditRecipe';
import AddRecipe from '../components/recipes/AddRecipe';
import FullDisplay from '../components/recipes/FullDisplay';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={Login} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/admin" component={Admin}/>
            <PrivateRoute path="/add" component={AddRecipe}/>
            <PrivateRoute path="/edit/:id" component={EditRecipe}/>
            <PrivateRoute path="/view/:id" component={FullDisplay}/>
            <PublicRoute component={NotFound}/>
        </Switch>
    </div>
    </Router>
)

export default AppRouter