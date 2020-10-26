import React from 'react';
import { Header, Navbar, Nav, Icon } from 'rsuite';

export default function Navi() {

    return (
        <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a className="navbar-brand logo">TODOAPPP</a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
              <Nav.Item>Todo List</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
    );
}
