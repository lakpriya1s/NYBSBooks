import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({
  auth,
  loginUser,
  logoutUser,
}: {
  auth: any;
  loginUser: Function;
  logoutUser: Function;
}) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isModelOpen, setisModelOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };
  const toggleModal = () => {
    setisModelOpen(!isModelOpen);
  };

  var username: any;
  var password: any;

  const handleLogin = (e: any) => {
    toggleModal();
    console.log({ username: username.value, password: password.value });
    loginUser({ username: username.value, password: password.value });
    e.preventDefault();
  };

  const handleLogout = () => {
    logoutUser();
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
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!auth.isAuthenticated ? (
                  <Button outline onClick={toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                    {auth.isFetching ? (
                      <span className="fa fa-spinner fa-pulse fa-fw"></span>
                    ) : null}
                  </Button>
                ) : (
                  <div>
                    <div className="navbar-text mr-3">{auth.user.username}</div>
                    <Button outline onClick={handleLogout}>
                      <span className="fa fa-sign-out fa-lg"></span> Logout
                      {auth.isFetching ? (
                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                      ) : null}
                    </Button>
                  </div>
                )}
              </NavItem>
            </Nav>{" "}
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={isModelOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => handleLogin(e)}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
