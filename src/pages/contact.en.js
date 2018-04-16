import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { navigateTo } from "gatsby-link";
import Loader from '../components/Loader';
import ContactPanel from '../components/ContactPanel';




export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailError : "",
                    showSpinner : false}
    this.spinnerHandler = this.spinnerHandler.bind(this)
  }
                
  spinnerHandler() {
    console.log('pozvan sam')
    this.setState({
      showSpinner: !this.state.showSpinner
    })
   }


  handleChange(e){
    this.setState({[e.target.name]: e.target.value});   
    
    if (this.state.email !== undefined && this.state.emailHasError != '') {
      this.setState({emailHasError: ''});  
    }
    
  }

  sendMail(data) {
    console.log(data);
    this.setState({showSpinner: true}); 
    return fetch('http://159.89.105.56:8000/contact', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
      if (res.status == 200) {
        navigateTo('aboutus');
      } else {
        this.setState({emailHasError: "contact__input-wrapper--error"});
        this.setState({showSpinner: false}); 
      }
        return res;
    }).catch(err =>  {
     
    });
}

  render() {
    return (
      <main>
        <Loader showSpinner={this.state.showSpinner} />
        <section className="intro wrapper">
          <h1 className="intro__title">Contact us! </h1>
          <p className="intro__paragraph">Got an idea? We'll make it happen. Let's do great softwares together!</p>    
        </section>
        <section className="wrapper">        
          <article className="contact">   
          <ContactPanel spinnerHandler={this.spinnerHandler} contactType='1'/>
          </article>
        </section>
      </main>
    );
  }
}