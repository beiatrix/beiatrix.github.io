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
              I am a <span className="highlight">software engineer</span> and <span className="highlight">visual designer</span> who is passionate about clean code and great UI/UX.
            </p>
            <p>
              In software engineering, I see myself as a fullstack web developer with a strength in the frontend. In design, my specialties are digital media, video, and hand-drawn illustration with an artist’s attention to detail and quality. I have a unique ability to rely on my own aesthetic sensibilities to elevate lo-fi wireframes into elegant user interfaces, leverage product insights to develop features, and rapidly learn new technologies along the way.
            </p>
            <p>
              My startup experience has given me a rich, multi-disciplinary array of experiences: designing frontend architecture with ReactJS and GraphQL, developing API features with TypeScript and TypeORM, supporting data requests with SQL and Node scripts, providing tech support for end users, conducting user testing and gathering feature requirements, and collaborating on cross-functional agile teams. I am emphatic about maintaining strong communication and writing good documentation to centralize shared knowledge.
            </p>
            <p>
              Highly curious, analytical, and creative, I am driven by the challenge to constantly learn new things and execute with equal care to both form and function.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}