import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const RequestConsultation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nhzsgvn', 'template_iocw7oj', form.current, 'gkX7qAYc07BzOraei')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    
    <div className='request-form'>
      <h1>Request Consultation</h1>
    
        <form ref={form} onSubmit={sendEmail}>
          <label className="name-label">Name</label>
          <input type="text" className="name" />
          <label>Email</label>
          <input type="email" className="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Submit" className='submit-button' />
        </form>
      </div>
  );
};

export default RequestConsultation;