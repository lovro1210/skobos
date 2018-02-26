import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
//import Mailgun from 'mailgun.js';



export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){     
    var data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };     
    console.log(data); 

    //this.sendMail(data);
   
  };

  sendMail(data) {
    return fetch('uri', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

  render() {
    return (
    <article className="contact">
    <section className="contact__panel">
      <div className="contact__title">Get in touch with us</div>
      <div className="contact__content">
        <form>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
              <label htmlFor="name"> Full name </label>
              <input type="text" id="name" name="name" required="required" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
            </div>
            <div className="contact__input-wrapper">
              <label htmlFor="email"> Email address </label>
              <input type="email" id="email" name="email" required="required" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <label htmlFor="subject"> Subject </label>
             <input type="text" id="subject" name="subject" required="required" onChange={this.handleChange}/>
             <span className="contact__input-underline"></span>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <label htmlFor="message"> Your message </label>
             <textarea  rows="8" cols="50" id="message" name="message" onChange={this.handleChange}/>
            </div>
           </div>
           <div className="contact__button-row">
           <button className="btn btn--secondary" onClick={this.handleSubmit} >
              Submit
           </button>
           </div>
        </form>  
      </div>    
    </section>
  </article>
    );
  }
}