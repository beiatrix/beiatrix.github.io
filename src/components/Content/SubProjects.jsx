import React from 'react'
import { subprojects } from './data'

export const SubProjects = () => {
  return (
    <div id="subprojects">
      {
        subprojects.map((project, idx) => {
          return (
            <section className="subproject-container" key={`subproject-${idx}`}>
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
              </div>
            </section>
          )
        })
      }
    </div>
  )
}