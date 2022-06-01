import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/navbar.css';
import LoginButton from './Login';
import LogoutButton from './Logout';

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <span className='navbar-brand mx-auto' href='#shortener'>
          &nbsp;<i className='fa-solid fa-link'></i>
        </span>
        &nbsp;
        <a className='navbar-brand' href='#shortener'>
          Narrow Links
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                <i className='fa-solid fa-house'></i>Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/unnikrishnan2002/Narrow-Links'
              >
                <i className='fa-brands fa-github'></i> Github
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href=''>
                <i className='fa-solid fa-id-badge'></i>Contact us
              </a>
            </li>
            <li className='nav-item log-in'>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
