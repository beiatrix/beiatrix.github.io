import React from 'react'

const projects = [
  {
    name: 'beam up',
    subtitle: 'INTERACTIVE 3D EXPLORATION',
    imageurl: 'https://i.imgur.com/0ffPh9H.jpg',
    url: 'https://beam-up.herokuapp.com',
    displayurl: 'beamup.space',
    desc: 'Beam Up is an ethereal, immersive 3D experience that sends a user on a journey beyond our solar system, ultimately revealing the beauty and splendor of the existence of life on earth. Traveling through the universe, the user will discover different earth-like exoplanets to be considered for possible human habitation, and end the journey with a wish for the universe. Interacting with each planet reveals data sourced from NASA along with its habitability status. Aesthetically, this web app has a dreamy, uplifting, feminine feel, and implements the NERDS stack in combination with Three.JS to bring the 3D space to life.',
    video: <iframe title="beam-up" width="480" height="270" src="https://www.youtube.com/embed/00jnzkbM1c4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
    name: 'fitby',
    subtitle: 'FITNESS APP',
    imageurl: 'https://i.imgur.com/qmNNsRx.jpg',
    url: 'https://fitby.herokuapp.com',
    displayurl: 'fitby.herokuapp.com',
    desc: "Fitby is a minimalist, data-driven fitness dashboard. In response to the information overload tracked by conventional fitness apps, this simple, lightweight solution allows users to monitor just two key datasets: fitness and nutrition. A delightful interface is crafted in Figma and executed with Material-UI, Animate.css, and lots of pure CSS. The backend is scaffolded on Node.js, Express, Sequelize, and PostgreSQL. Finally, beautiful data visualizations are achieved with Recharts, a charting library that integrates React, D3, and SVG. Fitby is the winner of the Sigurdsson Award for best UI Design at Fullstack's Hackathon.",
    video: <iframe title="fitby" width="480" height="270" src="https://www.youtube.com/embed/evIw24LYeZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
    name: 'pluto games',
    subtitle: 'E-COMMERCE WEBSITE',
    imageurl: 'https://i.imgur.com/UFdLsn3.jpg',
    url: 'https://pluto-games.herokuapp.com',
    displayurl: 'pluto-games.herokuapp.com',
    desc: "Pluto Games is an e-commerce website that sells tabletop board & card games. Front-end cart and inventory components were designed and developed by integrating  React, Redux, Material-UI, CSS, and the Stripe API. The Pluto Games team collaborated in an Agile environment, used Git & Waffle.io to manage development, tested with Mocha & Chai, continuously integrated with Travis CI, and continuously deployed to Heroku."
  }
]

export const Projects = () => {
  return (
    <div id="projects">
      {/* has youtube video */}
      {
        projects.map((project, idx) => {
            return project.video &&
                (
                    <section className="project-container" key={`project-${idx}`}>
                        <div className="project-img">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img src={project.imageurl} alt={project.name} />
                        </a>
                        </div>
                        <div className="project-desc">
                        <div className="project-text">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <h1>{project.name}</h1>
                            </a>
                            <h4>{project.subtitle}</h4>
                            <div className="project-gradient"></div>
                            <div className="gradientBar" />
                            <h2><a href={project.url} target="_blank" rel="noopener noreferrer">{project.displayurl}</a></h2>
                            <p>{project.desc}</p>
                        </div>
                        <div className="project-video">
                            {project.video}
                        </div>
                        </div>
                    </section>
                )
        })
      }

      {/* third project - no youtube video */}
      <section className="project-container">
        <div className="project-img">
          <a href={projects[2].url} target="_blank" rel="noopener noreferrer">
            <img src={projects[2].imageurl} alt={projects[2].name} />
          </a>
        </div>
        <div className="project-desc">
          <div className="project-text">
            <a href={projects[2].url} target="_blank" rel="noopener noreferrer">
              <h1>{projects[2].name}</h1>
            </a>
            <h4>{projects[2].subtitle}</h4>
            <div className="project-gradient"></div>
            <div className="gradientBar" />
            <h2><a href={projects[2].url} target="_blank" rel="noopener noreferrer">{projects[2].displayurl}</a></h2>
            <p>{projects[2].desc}</p>
          </div>
        </div>
      </section>
    </div>
  )
}