import React from 'react'
import './testimonials.scss'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from known</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials-container">
        <article className="testimonial">
          <div className="client-avatar">
          </div>
            <h5 className='client-name'><i>John Galt</i></h5>
            <small className='client-review'>
            <i>Nothing to show yet. Soon there will be a Testimonial here. </i><a href="https://linkedin.com/in/bruno-groth/#endorsements">Be The First!</a>
            </small> 
        </article>
      </div>
    </section>
  )
}

export default Testimonials
