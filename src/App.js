import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";
import Maquina from "./Components/Maquina";
import Mineracao from "./Components/Mineracao";

function App() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Navbar.Brand href="/">Bitcoin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" path="/" component={Home}>
              Home
            </Nav.Link>

            <NavDropdown title="Investimento" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/maquina"
                path="/maquina"
                component={Maquina}
              >
                Máquinas
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/mineracao"
                path="/mineracao"
                component={Mineracao}
              >
                Mineração
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <body>
        <div className="wrapper">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/maquina" component={Maquina} />
              <Route exact path="/mineracao" component={Mineracao} />
            </Switch>
          </Router>
          <div className="push"></div>
        </div>

        <footer className="footer">
          <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            className="mt-5"
          >
            <Navbar.Brand href="/">Bitcoin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" path="/" component={Home}>
                  Home
                </Nav.Link>

                <NavDropdown title="Investimento" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    href="/maquina"
                    path="/maquina"
                    component={Maquina}
                  >
                    Máquina
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/mineracao"
                    path="/mineracao"
                    component={Mineracao}
                  >
                    Mineração
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </footer>
      </body>
    </>
  );
}

export default App;
