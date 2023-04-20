//import React, { useCallback, useState } from 'react';
import logo from '../logo.svg'
import PropTypes from 'prop-types'

function Header(props) {
   

    const login = props.user 
        ? <span> Welcome {props.user} ! </span>
        : <span>Connectez-vous !</span>

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
                        First React
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link active" to='/'>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" to='/Counter'>Link</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" to='/Roles'>Roles</div>
                        </li>
                    </ul>
                    <div className='navbar-text'>
                     {login}
                        </div>
                </div>
            </nav>
            
        </div>
        
    );
}

Header.propTypes = {
    user: PropTypes.string
}

export default Header;