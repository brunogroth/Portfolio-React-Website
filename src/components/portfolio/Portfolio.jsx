import React from 'react'
import './portfolio.scss'
import IGORBARROS from '../../assets/igorbarros.webp'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const projects = [
  {
    id: 1,
    image: IGORBARROS,
    title: 'Igor Barros Website',
    github: '',
    description: "Igor Barros is an brazilian Car Dealer at Florida. I developed the website and performed it's complete translation working for Autoconf. This is a huge step for the company, putting the feet on foreign territory, and also for me, beign able to apply my english skills in a real project.",
    website: 'https://igorbarros.com'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/brunogroth',
    description: '',
    website: 'https://github.com/brunogroth'
  },
  {
    id: 3,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: 'https://github.com/brunogroth',
    description: '',
    website: 'https://github.com/brunogroth'
  },
  {
    id: 4,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/brunogroth',
    description: '',
    website: 'https://github.com/brunogroth'
  },
  {
    id: 5,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com/brunogroth',
    description: '',
    website: 'https://github.com/brunogroth'
  },
  {
    id: 6,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com/brunogroth',
    description: '',
    website: 'https://github.com/brunogroth'
  }
]

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
