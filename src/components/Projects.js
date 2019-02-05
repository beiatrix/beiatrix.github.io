import React from 'react'

const projects = [
  {
    name: 'beam up',
    subtitle: 'INTERACTIVE 3D EXPLORATION',
    url: 'https://beam-up.herokuapp.com',
    desc: 'immersive 3D web app where user travels through space and discovers exoplanets.'
  },
  {
    name: 'fitby',
    subtitle: 'FITNESS APP',
    url: 'https://fitby.herokuapp.com',
    desc: 'minimalist fitness dashboard that incorporates data visualizations of user input. Stackathon winner for Best UI Design.'
  },
  {
    name: 'pluto games',
    subtitle: 'E-COMMERCE WEBSITE',
    url: 'https://pluto-games.herokuapp.com',
    desc: 'e-commerce website that sells tabletop board & card games.'
  },
  {
    name: 'DC maps',
    subtitle: 'INTERACTIVE FLOORPLANS',
    url: 'https://www.dc.umich.edu/hours',
    desc: 'mobile-responsive interactive maps made with SVG & CSS.'
  },
]

export const Projects = () => {
  return (
    <div id="projects">
    {
      projects.map((project, idx) => {
        return (
          <section key={`project-${idx}`}>
            <img src="https://images.unsplash.com/photo-1502716197620-bf14ce1651b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt={project.name} />
            <h1>{project.name}</h1>
            <h2>{project.subtitle}</h2>
            <div className="gradientBar" />
            <p><a href={project.url} target="_blank">{project.url}</a></p>
            <p>{project.desc}</p>
          </section>
        )
      })
    }
    </div>
  )
}