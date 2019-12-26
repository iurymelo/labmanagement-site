import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import classes from './Navbar.module.css'

const navbar = (props) => {
  return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">LPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Notícias</Nav.Link>
              <Nav.Link href="#pricing">Linhas de Pesquisa</Nav.Link>
              <Nav.Link href="#equipe">Equipe</Nav.Link>
              <NavDropdown title="Projetos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Projeto 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Projeto 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Projeto 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link eventKey={2} href="#sair">
                Sair
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  )
};

export default navbar
