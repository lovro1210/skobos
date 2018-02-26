import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Mailgun from 'mailgun.js';



export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    console.log("MAIL");
    var api_key = 'key-6fa755e4a15f89156794c0361a71d713';
    var domain = 'sandbox880096e65d434177912527319d552905.mailgun.org';
    var mailgun = Mailgun({apiKey: api_key, domain: domain});
     
    var data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'mislav.zabcic@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!'
    };
     
    mailgun.messages().send(data, function (error, body) {
     
    });
  };

  render() {
    return (
    <article className="contact">
    <section className="contact__panel">
      <div className="contact__title">Get in touch with us</div>
      <div className="contact__content">
        <form>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
              <div> Full name </div>
              <input type="text" name="name" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
            </div>
            <div className="contact__input-wrapper">
              <div> Email address </div>
              <input type="email" name="_replyto" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <div> Subject </div>
             <input type="text" name="subject" onChange={this.handleChange}/>
             <span className="contact__input-underline"></span>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <div> Your message </div>
             <textarea  rows="8" cols="50" name="message" onChange={this.handleChange}/>
            </div>
           </div>
           <div onClick={this.handleSubmit} >
           TEST
           </div>
        </form>  
      </div>    
    </section>
  </article>
    );
  }
}