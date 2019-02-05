import React from 'react'

export const Navbar = () => {
  return (
  <nav id="navbar">
    <img id="logo" src="https://static1.squarespace.com/static/541f489de4b0e98b8cace342/t/581b95e1be659491cae3a68b/1549306404814/?format=750w" />
    <a href="/#about">ABOUT</a>
    <a href="/#projects">PROJECTS</a>
    <a href="/">RESUME</a>
    <a href="https://www.beiatrix.com">ART+DES</a>
    <a href="/#contact">CONTACT</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  </nav>
  )
}