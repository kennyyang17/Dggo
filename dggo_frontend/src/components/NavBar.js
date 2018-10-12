import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';

const NavBar = (props) => {

  const linkTwo = {
    padding: '14px',
    margin: '6px 6px 6px',
    color: 'white',
    border: '1px solid orange'
  }

  return (
    <div className = "NavBar" style = {linkTwo}>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="navbar-brand" href="/">
            <NavLink to="/" exact>Home</NavLink>
            </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="/about">
              <NavLink to="/about" exact >About</NavLink>
              </a>
            </li>
          </ul>
           <LoginButton toggleModal={props.toggleModal}/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
