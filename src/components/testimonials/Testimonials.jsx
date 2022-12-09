import React, { useState } from 'react'
import './testimonials.scss'
import testimonial1 from '../../assets/patrik.jpg';

const Testimonials = () => {
  const [Portuguese, setPortuguese] = useState(true);
  return (
    <section id='testimonials'>
      <h5>Review from known</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials-container">
        <article className="testimonial">
          <div className="client-avatar">
            <img src={testimonial1} alt="Patrik" />
          </div>
            <h5 className='client-name'><i><strong>Patrik Bispo</strong></i> - Customer Success Onboarding Leader at Autoconf</h5>
            <small className='client-review'>
              { Portuguese ?
              <>
                <p>Compromisso, inteligência e foco no resultado são pontos fortes do Bruno!</p>
                <p>Diariamente é possível ver muitas qualidades em ação que o tornam um parceiro de projeto incrível.</p> 
                <p>A dedicação e o compromisso na resolução de problemas não faltam em todas as tratativas que passam pelas mãos competentes e profissionais do Bruno.</p>
                <p>No relacionamento interpessoal é uma pessoa simples, didática e de fácil acesso. Sou orgulhoso em acompanhar seu crescimento, ao longo de tantos meses que estamos à frente do sucesso e encantamento dos clientes autoconf, sendo ele de suma importância na jornada que construímos.</p>
              </> :
              <>
                <p>Commitment, intelligence and focus on results are Bruno's strengths!</p>
                <p>On a daily basis, you can see many qualities in action that make him an incredible project partner.</p> 
                <p>There is a huge dedication and commitment to problem solving in all the dealings that pass through Bruno's competent and professional hands.</p>
                <p>In interpersonal relationships, he is a simple, didactic and easily accessible person. I am proud to accompany its growth, over the many months that we have been at the forefront of the success and delight of autoconf customers, which is of paramount importance in the journey we have built.</p>
              </>
              }</small> 
            <button class="btn btn-primary translate" onClick={() => setPortuguese(!Portuguese)}>{Portuguese ? 'Translate' : 'See Original'}</button>
        </article>
        <small class="give-testimonial"><i>More testimonials soon. <a href="https://www.linkedin.com/recs/give/?senderId=bruno-groth">Collaborate!</a></i></small> 
      </div>
    </section>
  )
}

export default Testimonials
