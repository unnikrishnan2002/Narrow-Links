import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/navbar.css';
import LoginButton from './Login';
import LogoutButton from './Logout';

export const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>
        <i className='fa-solid fa-link'></i>
        Narrow Links
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'></Nav>
        <Nav>
          <Nav.Link href='#'>
            <i className='fa-solid fa-house'></i>
            Home
          </Nav.Link>
          <Nav.Link
            target='_blank'
            href='https://github.com/unnikrishnan2002/Narrow-Links'
          >
            <i className='fa-brands fa-github'></i>
            GitHub
          </Nav.Link>
          <Nav.Link href='#'>
            <i className='fa-solid fa-id-badge'></i>
            Contact us
          </Nav.Link>
          <Nav.Link className='nav-item log-in'>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
