import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../pages/About';
import './MainNavigation.scss';

const MainNavigation = () => {
  const [currentKey, setCurrentKey] = useState(1);
  const path = window.location.pathname;
  useEffect(() => {
    switch (path) {
      case '/about':
        setCurrentKey(2);
        break;
      default:
        setCurrentKey(1);
        break;
    }
  }, [path]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ padding: '10px', marginBottom: '20px' }}
    >
      <Navbar.Brand
        className="logo-font"
        as={Link}
        to="/"
        onClick={() => setCurrentKey(1)}
      >
        <h4 style={{ margin: '0' }}>Swarup Kumar Misra</h4>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav
          className="justify-content"
          activeKey={currentKey}
          onSelect={(selectedKey) => {
            setCurrentKey(selectedKey);
          }}
        >
          <Nav.Link as={Link} eventKey={1} to="/">
            Links
          </Nav.Link>
          <Nav.Link as={Link} eventKey={2} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;