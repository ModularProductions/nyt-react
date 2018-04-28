import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import "./NavTabs.css";

// function handleSelect(selectedKey) {
//   alert(`selected ${selectedKey}`);
// }
// onSelect={handleSelect}

const NavTabs = () => (
  <Nav bsStyle="pills" >
    <NavLink
      to="/search"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >Find</NavLink>
    <NavLink
      to="/saved"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >Saved</NavLink>
    {/* <NavItem eventKey={1} href="/">
      Find
    </NavItem>
    <NavItem eventKey={2} href="/saved">
      Saved
    </NavItem> */}
  </Nav>
);

export default NavTabs;
