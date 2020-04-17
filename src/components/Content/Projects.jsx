import React from 'react'
import { projects } from './data'

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