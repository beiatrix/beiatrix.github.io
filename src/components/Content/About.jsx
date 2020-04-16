import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const About = () => {
  return (
    <Container id="about" >
      <Row className="justify-content-md-center align-items-center">
        <Col md="4" >
          <div id="bioimg">
            <img id="headshot" src="https://i.imgur.com/iFc0B4c.jpg" alt="beiatrix" />
            {/* circular version -- use in media query?
        https://i.imgur.com/MINwc4u.png */}
          </div>
        </Col>
        <Col lg="8" >
          <div id="biotext">
            <h1>hello, i'm <span className="highlight">beiatrix</span></h1>
            <p>
              I am a <span className="highlight">software engineer</span> and <span className="highlight">visual designer</span> who is passionate about the intersection of art and technology. I love to design and build stunning interactive experiences.</p>
            <p>
              I'm currently working as a full-stack software engineer with a strong focus in front-end, UX, and visual design. At my current role, I primarily own the development of a UI for my company's internal operations software, which I've built using React (Hooks &amp; Context API), TypeScript, Apollo Client, and GraphQL. I've also dipped into our server-side code which is built with Node, Express, TypeScript, Apollo Server, GraphQL, and PostgreSQL. Some accomplishments I've had are establishing a code style guide for our company, kicking off a design system &amp; UI template to standardize our visual brand across our internal tools, and hiring software engineers and UX designers to grow out our tech team.
            </p>
            <p>
              My previous professional experience consists of 2.5 years as a graphic designer and 2.5 years as a computer consultant. I've built my skill set through a mix of some formal computer science education (C++ in college and Java in high school), a software engineering immersive in full-stack JavaScript, many nights and weekends of obsessive self-study, and learning on the job. As someone who's highly curious, diligent, and creative, I'm driven by the challenge to constantly learn new things and execute with equal care to both form and function.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}