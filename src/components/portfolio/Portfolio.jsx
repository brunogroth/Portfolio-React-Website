import React from 'react'
import './portfolio.scss'
import IGORBARROS from '../../assets/igorbarros.webp'
import ATLANTISMOTORS from '../../assets/atlantis.webp'
import GALERIA from '../../assets/galeria.webp'
import RTCAR from '../../assets/RTCar.webp'
import NovaMarka from '../../assets/NovaMarka.webp'
import Premier from '../../assets/Premier.webp'

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
    image: ATLANTISMOTORS,
    title: 'Atlantis Motors',
    github: '',
    description: "Atlantis Motors is one of more than 100 websites that I've developed for Car Dealers at Autoconf.",
    website: 'https://atlantismotors.com.br'
  },
  {
    id: 3,
    image: GALERIA,
    title: 'Galeria Dos Carros | "Car Gallery"',
    github: '',
    description: "Galeria Dos Carros is one of more than 100 websites that I've developed for Car Dealers at Autoconf.",
    website: 'https://galeriadoscarros.com.br/'
  },
  {
    id: 4,
    image: RTCAR,
    title: 'RT Car',
    github: '',
    description: "RT Car is one of more than 100 websites that I've developed for Car Dealers at Autoconf.",
    website: 'https://rtcar.com.br/'
  },
  {
    id: 5,
    image: NovaMarka,
    title: "Nova Marka is one of more than 100 websites that I've developed for Car Dealers at Autoconf.",
    github: '',
    description: '',
    website: 'https://novamarkaveiculos.com.br/'
  },
  {
    id: 6,
    image: Premier,
    title: 'Portal Premier',
    github: 'https://github.com/brunogroth',
    description: "Portal Premier is a premium car dealer and is one of more than 100 websites that I've developed for Car Dealers at Autoconf.",
    website: 'https://portalpremier.com.br/'
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
