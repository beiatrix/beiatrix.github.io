import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import classNames from 'classnames'

export const Appbar = () => {
  return (
<Navbar sticky="top" bg="white" expand="sm">
<a id="logolink" href="#home">

    <img id="logo" src="https://static1.squarespace.com/static/541f489de4b0e98b8cace342/t/581b95e1be659491cae3a68b/1549306404814/?format=750w"
    width="auto"
    height="50"
    className="d-inline-block align-top"
    alt="beiatrix"
    />
</a>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
    <Nav >
      <Nav.Item>
        <Nav.Link href="/#about">ABOUT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#projects">PROJECTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">RESUME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.beiatrix.com">ART+DES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#contact">CONTACT</Nav.Link>
      </Nav.Item>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}


{/* <Navbar bg="dark" expand="lg">
  
<img id="logo" src="https://static1.squarespace.com/static/541f489de4b0e98b8cace342/t/581b95e1be659491cae3a68b/1549306404814/?format=750w" />


</Navbar> */}