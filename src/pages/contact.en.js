import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { navigateTo } from "gatsby-link";




export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailError : "",
                  showSpinner : false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){

    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.name);
  }

 

  handleSubmit(e){   
    e.preventDefault();  
    if (this.state.name === undefined || this.state.name.length == 0) {
      this.state.name = '';
      return;
    }
    var data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };     
    
    this.sendMail(data);
   
  };

  sendMail(data) {
    this.setState({showSpinner: true}); 
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
        this.setState({emailError: "contact__input-wrapper--error"});
        this.setState({showSpinner: false}); 
      }
        return res;
    }).catch(err =>  {
     
    });
}

  render() {
    return (        
    <article className="contact">   
    <section className={this.state.showSpinner ? 'loader-box is-active' : 'loader-box'}>
      <span className="loader"></span>
    </section> 
    <section className="contact__panel">
    <div className="contact__title">Get in touch with us</div>
    <div className="contact__content">
    <form action="" onSubmit={this.handleSubmit}>
           <div className="contact__form-row">
            <div className={this.state.name === undefined || this.state.name.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
              <label htmlFor="name"> Full name </label>
              <input maxLength="40" type="text" id="name" name="name" onChange={this.handleChange} />
              <span className="contact__input-underline"></span>
              <span className="contact__input-error">Name is required!</span>
            </div>
            <div className={"contact__input-wrapper " + this.state.emailError}>
              <label htmlFor="email"> Email address </label>
              <input maxLength="50" type="text" id="email" name="email"  onChange={this.handleChange}/>
              <span className="contact__input-underline"></span>
              <span className="contact__input-error">Email address is invalid!</span>
            </div>
           </div>
           <div className="contact__form-row">
           <div className={this.state.subject === undefined || this.state.subject.length > 0  ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
             <label htmlFor="subject"> Subject </label>
             <input maxLength="80" type="text" id="subject" name="subject" onChange={this.handleChange}/>
             <span className="contact__input-underline"></span>
             <span className="contact__input-error">Subject is required!</span>
            </div>
           </div>
           <div className="contact__form-row">
           <div className={this.state.message === undefined || this.state.message.length > 0  ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
             <label htmlFor="message"> Your message </label>
             <textarea  maxLength="2500" rows="8" cols="50" id="message" name="message" onChange={this.handleChange}/>
             <span className="contact__input-error">Message is required!</span>
            </div>
           </div>
           <div className="contact__button-row">
           <button className="btn btn--secondary" type="submit" >
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