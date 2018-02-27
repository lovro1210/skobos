import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { navigateTo } from "gatsby-link";



export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){   
    e.preventDefault()  
    var data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };     
   

    this.sendMail(data);
   
  };

  sendMail(data) {
    this.showSpinner = true;
    return fetch('http://159.89.105.56/contact', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
      if (res.status == 200) {
        navigateTo('thanks');
      } else {
        this.setState({email: "contact__input-wrapper--error"});
      }
        return res;
    }).catch(err =>  {
    });
}

  render() {
    return (
    <article className="contact">
    <section className="contact__panel">
    <div className="contact__title">Get in touch with us</div>
    <div className="contact__content">
    <form action="">
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
              <label htmlFor="name"> Full name </label>
              <input type="text" id="name" name="name" required="required" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
              
            </div>
            <div className={"contact__input-wrapper " + this.state.email}>
              <label htmlFor="email"> Email address </label>
              <input type="email" id="email" name="email" required="required" onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
              <span className="contact__input-error">Email address is invalid!</span>
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