import React from 'react'
import './portfolio.scss'
import {projects} from './Projects' 



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          projects.map(({ id, image, title, description, github, website }) => {
            return (<article key={id} className='portfolio-item'>
              <div className='portfolio-item-image'>
                <a href={website} target="_blank" rel="noreferrer"><img src={image} alt={title}></img></a>
              </div>
              <h3><a href={website} target="_blank" rel="noreferrer">{title}</a></h3>
              <p>{description}</p>
              <div className="portfolio-item-cta">
                {github && <a href={github} className='btn'>Github</a>} {/* ternary IF with only true condition */}
                <a href={website} target="_blank" rel="noreferrer" className='btn btn-primary'>Visit Website</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
