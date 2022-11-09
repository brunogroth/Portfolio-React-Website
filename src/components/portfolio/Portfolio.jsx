import React from 'react'
import './portfolio.scss'
import igorbarros from '../../assets/igorbarros.webp'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio-container">
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <a href="https://igorbarros.com" target="_blank" rel="noreferrer"><img src={igorbarros} alt="Igor Barros Dealer Cars website"></img></a>
            </div>
              <h3><a href="https://igorbarros.com" target="_blank" rel="noreferrer">Igor Barros Website</a></h3>
              <p> Igor Barros is  an brazilian Car Dealer at Florida. I developed the website and performed it's complete translation working for <a href="https://autoconf.com.br/" target="_blank" rel="noreferrer">Autoconf</a>.</p>
              <p>This is a huge step for the company, putting the feet on foreign territory, and also for me, beign able to apply my english skills in a real project.</p>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" target="_blank" rel="noreferrer" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={IMG1} alt="Igor Barros Dealer Cars website"></img>
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={IMG2} alt="Igor Barros Dealer Cars website"></img>
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={IMG3} alt="Igor Barros Dealer Cars website"></img>
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={IMG4} alt="Igor Barros Dealer Cars website"></img>
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
          <article className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={IMG5} alt="Igor Barros Dealer Cars website"></img>
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio-item-cta">
                {/* <a href="https://igorbarros.com" className='btn'>Github</a> */}
                <a href="https://igorbarros.com" className='btn btn-primary'>Visit Website</a>
              </div>
          </article>
       </div>
    </section>
  )
}

export default Portfolio
