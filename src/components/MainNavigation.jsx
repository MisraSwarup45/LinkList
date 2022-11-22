import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const MainNavigation = () => {
  return (
    <Navbar bg = "dark" variant='dark' style={{padding: '10px', marginBottom: '20px'}}>
        <Navbar.Brand className='logo-font' as={Link} to='/'>
            <h4 style={{margin: 0}}>Swarup Kumar Misra</h4>
        </Navbar.Brand>
    </Navbar>
  )
}

export default MainNavigation