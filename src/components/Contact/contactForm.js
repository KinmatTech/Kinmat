import React from 'react';
import "../../App.css";
import emailjs from '@emailjs/browser';

export default function ContactUs () {

     
  function sendEmail(e) {
    e.preventDefault();
  
  
  emailjs.sendForm('service_8f3gcdf', 'template_168vukh', e.target, 'HIj1SmhDu2N20_kJy')
      .then((result) => {
          console.log('SUCCESS');
      }, (error) => {
          console.log('FAILED...', error);
      });
      e.target.reset()
  };

  return (
    <div className='contact'>
      <h2>Contact:</h2>
      <strong>Addresss:</strong>&nbsp;&nbsp;ICT Innovation Center, University of Nigeria, Nsukka.<br/>
      <strong>Phone:</strong>&nbsp;&nbsp;+2348060850958.<br/>
      <strong>Email:</strong>&nbsp;&nbsp;mathewok20@gmail.com, mathew.ani@unn.edu.ng
      
      <div className="container">
            <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
        <div className="col-8 form-group mx-auto">
        <input type="text" className="form-control" placeholder="Name" 
        name="name" />
      </div> 
      
      <div className="col-8 form-group pt-2 mx-auto">
      <input type="email" className="form-control" placeholder="Email Address" 
      name="email" />
    </div>
      
    <div className="col-8 form-group pt-2 mx-auto">
      <textarea className="form-control" id="" cols="30" rows="8" 
      placeholder="Your Message" name="message"> </textarea>
    </div>
      
    <div className="col-8 form-group pt-3 mx-auto">
      <input type="submit" className="btn btn-info" value="Send Message" />
      </div>
      </div>
    </form>
    </div>
  </div>
  );
}