import React from 'react'
import './testimonials.scss'

import { IconBase } from 'react-icons'
import { FaUser } from 'react-icons/fa'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from known</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials-container">
        <article className="testimonial">
          <div className="client-avatar">
            <FaUser/>
            <h5 className='client-name'> Name 01 </h5>
            <small className='client-review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illum libero blanditiis quis asperiores, beatae veniam reiciendis et magnam quod dolore voluptatibus velit molestiae sit. Odio nisi sunt ab laboriosam?
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
