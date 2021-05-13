import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar fixed="top" dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            NYBS Books
          </NavbarBrand>
          <NavbarToggler className="ml-auto" onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Book List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/topbooks">
                  <span className="fa fa-list fa-lg"></span> Top 5
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
