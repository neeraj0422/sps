import React from 'react'
import img20 from '../assets/email.png';
import whatsappImage from '../assets/w.jpg';

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us <a href="https://wa.me/+919990140556" target="_blank" rel="noopener noreferrer">
        <img
            src={whatsappImage}
            alt="WhatsApp"
            style={{ width: '60px', height: '60px' }} // Adjust the width and height as needed
          />
        </a></h1>
        

        <form>


        <div>
          <label>Name</label>
          <input type= 'text' required placeholder='abc'></input>
        </div>
        <div>
          <label>Email</label>
          <input type= 'email' required placeholder='abc@xyz.com'></input>
        </div>
        <div>
          <label>Message</label>
          <input type= 'text' required placeholder='Tell us about your query'></input>
        </div>

        <button type = 'submit' >Send</button>
        <h2> Call us : +91 9990140556</h2>
       
        <h3>
          Email us: <a href="mailto:mishranirmal518@gmail.com">
            <img className='img20' src={img20} alt='Email' /> {/* Email image */}
          </a>
        </h3>
        </form>
      </main>
    </div>
  )
}

export default Contact