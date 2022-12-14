import React from 'react'
import './contact.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {BsPhone, BsWhatsapp} from 'react-icons/bs'
import ContactItem from './ContactItem'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const notify = () => toast.success('Message successfully sent! 😄', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm('service_kxlfcb9', 'template_h6551zb', form.current, '5X5kUFsjFSpripdEY')
      .then(() => {
          
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-items">
          <ContactItem title={"Email"} content={"brunom.groth@gmail.com"} cta={"Send an Email"} url={"mailto:brunom.groth@gmail.com"}>
            <MdOutlineEmail className='contact-item-icon'/>
          </ContactItem>

          <ContactItem title={"WhatsApp"} content={"+55(41)99996-4650"} cta={"Send a Message"} url={"https://wa.me/+5541999964650?text=Hi!%20I%20came%20from%20your%20Portfolio."}>
            <BsWhatsapp className='contact-item-icon'/>
          </ContactItem>
          
          <ContactItem title={"Phone"} content={"+55(41)99996-4650"} url={"tel:+5541999964650"} cta={"Call Me"}>
            <BsPhone className='contact-item-icon'/>
          </ContactItem>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message Here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
