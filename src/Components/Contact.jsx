import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        

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
          <h3>Email us: sangeetarchanama@gmail.com</h3>
        </form>
      </main>
    </div>
  )
}

export default Contact