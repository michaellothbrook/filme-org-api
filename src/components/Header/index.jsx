import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Nav, Navbar } from "react-bootstrap"
import "./styles.css"

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="text-center" href="#home">
          VivaDecora
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Filmes não curados</Nav.Link>
            <Nav.Link href="#likes">Filmes curtidos</Nav.Link>
            <Nav.Link href="#not-likes">Filmes não curtidos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
