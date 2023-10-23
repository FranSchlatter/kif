import './contact.css';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';

function Contact( {contactRef} ) {
  const [emailsent, setEmailsent] = useState(false);

  const form = useRef();
  const contactRight = useRef(null);
  const contactLeft = useRef(null);
  const contactTitle = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('Portfolio-FranSchlatter', 'template_f3lghkr', form.current, 'MLOzqjyfDNwrO1Rht')
      .then((result) => {
        showToastMessage();
        setEmailsent(true);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const sendAnotherEmail = () => {
    setEmailsent(false);
  };

  const showToastMessage = () => {
    toast.success("Email sent successfully", {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  useEffect(() => {
    function activarAnimacion() {
      const scrollPosition = window.scrollY;
      const elementPosition = contactRight.current.offsetTop;
      
      if (scrollPosition + 1200 >= elementPosition) {
        contactRight.current.classList.add('slide-in-right', 'visible');
        contactRight.current.classList.remove('hidden');
        contactLeft.current.classList.add('slide-in-left', 'visible');
        contactLeft.current.classList.remove('hidden');
        contactTitle.current.classList.add('focus-in-contract', 'visible');
        contactTitle.current.classList.remove('hidden');
      }
      else {
        contactRight.current.classList.remove('slide-in-right', 'visible');
        contactRight.current.classList.add('hidden');
        contactLeft.current.classList.remove('slide-in-left', 'visible');
        contactLeft.current.classList.add('hidden');
        contactTitle.current.classList.remove('focus-in-contract', 'visible');
        contactTitle.current.classList.add('hidden');
      }
       
    }

    // Añadir un event listener para el evento 'scroll'
    window.addEventListener('scroll', activarAnimacion);

    // Limpiar el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener('scroll', activarAnimacion);
    };
  }, []);

  return (
    <div className='main_contact_app' ref={contactRef}>
      <h1 className='contact_title_h1'>CONTACT</h1>
      <h5 ref={contactTitle} className='contact_title_h5'>If you have a question or want to work with me send me an email</h5>
      <div className="contact_app">
        {
          !emailsent ? 
          <div ref={contactLeft}>
            <form className='contact_section_form' ref={form} onSubmit={sendEmail}>
              <input placeholder='Your Name' type="text" name="nombre" />
              <input placeholder='Your Email' type="email" name="email" />
              <textarea placeholder='Messaje' name="mensaje" />
              <input className="contact_button_send" type="Submit" value="Send" />
            </form>
          </div>
          : 
          <div ref={contactLeft}>
            <div className='contact_section_form'>
              <h3>Your message has been sent correctly</h3>
              <h4>I will contact you shortly</h4>
              <button className='button_resend' onClick={sendAnotherEmail}>Send another email</button>
            </div>
          </div>
        }

        <div ref={contactRight} className='contact_section_div hidden'>
          <a href="https://calendly.com/franschlatter/30min" target={'_blank'}>
            <div>
              <EventIcon style={{color: "blue"}}/>
              <span>Schedule an interview</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}>
            <div>
              <LinkedInIcon style={{color: "blue"}}/>
              <span>Send me a DM</span>
            </div>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target={'_blank'}>
            <div>
              <EmailIcon style={{color: "blue"}}/>
              <span>franchi13579@gmail.com</span>
            </div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=3424365585" target={'_blank'}>
            <div>
              <WhatsAppIcon style={{color: "blue"}}/>
              <span>+5493424365585</span>
            </div>
          </a>
          <a href="https://www.instagram.com/fran.schlatter/" target={'_blank'}>
            <div>
              <InstagramIcon style={{color: "blue"}}/>
              <span>@FranSchlatter</span>
            </div>
          </a>
        </div>

      </div> 
    </div>
    
  );
}

export default Contact;