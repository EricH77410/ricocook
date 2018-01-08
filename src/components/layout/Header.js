import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

import RecipeFilter from '../recipes/RecipeFilter';
import FilterSelector from './FilterSelector';

export const Header = ({ startLogout }) => (
    <div className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Rico Cook</h1>
                </Link>
                <Link className="nav-link" to="/admin">Admin</Link>
                <Link className="nav-link" to="/add">Add</Link>
                
                <div className="search-bar">
                    <RecipeFilter />
                </div>
                <div className="logout">
                    <button className="logout-link nav-link" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
        <FilterSelector />
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: ()=>dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header)
