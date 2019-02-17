import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Crawford Wedding</NavbarBrand>
      <Nav className="nav">
        <NavItem>
          <NavLink tag={Link} to="/attending">Guest List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/rsvp">RSVP</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/details">Details</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/our-story">Our Story</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/music">Music</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar
