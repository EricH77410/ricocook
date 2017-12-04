import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (
    <div className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Rico Cook</h1>
                </Link>
                <Link className="button button--link" to="/admin">Admin</Link>
                <Link className="button button--link" to="/add">Add</Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: ()=>dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header)
