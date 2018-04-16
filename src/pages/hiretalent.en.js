import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../components/ContactPanel';
import Loader from '../components/Loader';

class HireTalent extends React.Component {
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

  handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  render() {

  
  return(
    <main>
      <Loader showSpinner={this.state.showSpinner} />
      <section className="intro wrapper">
        <h1 className="intro__title">Our expertise. Your freedom.</h1>
        <p className="intro__paragraph">Connect the right talent with your business!</p>    
      </section>
      <section className="with-heading wrapper">
        <div className="with-heading__heading">How it works</div>
        <div className="with-heading__content narrow">
          <article className="gallery">
            <div className="gallery__item2">
              <img src='http://via.placeholder.com/64x64' className="gallery__item2-icon" alt="pic"></img>
              <div className="gallery__item2-title">Connect</div>
              <div className="gallery__item2-paragraph">Tell us about your project. We will quickly match you with the right talent</div>
            </div>
            <div className="gallery__item2">
              <img src='http://via.placeholder.com/64x64' className="gallery__item2-icon" alt="pic"></img>
              <div className="gallery__item2-title">Hire</div>
              <div className="gallery__item2-paragraph">Tell us about your project. We will quickly match you with the right talent</div>
            </div>
            <div className="gallery__item2">
              <img src='http://via.placeholder.com/64x64' className="gallery__item2-icon" alt="pic"></img>
              <div className="gallery__item2-title">Pay</div>
              <div className="gallery__item2-paragraph">Tell us about your project. We will quickly match you with the right talent</div>
            </div>
            <div className="gallery__item2">
              <img src='http://via.placeholder.com/64x64' className="gallery__item2-icon" alt="pic"></img>
              <div className="gallery__item2-title">Work</div>
              <div className="gallery__item2-paragraph">Tell us about your project. We will quickly match you with the right talent</div>
            </div>
          </article>
        </div>
      </section>
      
      

      <div className="grey">
      <section className="with-heading wrapper">
        <div className="with-heading__heading">Hire talent</div>
        <div className="with-heading__content">
          <article className="row4">
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">WEB DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">MOBILE DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">DESKTOP DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">SOFTWARE ENGINEERS</div>
            </div>
          </article>
          <div className="section-title">Meet our team</div>
          <article className="row4">
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">WEB DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">MOBILE DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">DESKTOP DEVELOPERS</div>
            </div>
            <div className="row4__item">
              <img src='http://via.placeholder.com/48x48' className="row4__item-icon" alt="pic"></img>
              <div className="row4__item-text">SOFTWARE ENGINEERS</div>
            </div>
          </article>

        </div>
      </section>
      </div>

      <section className="with-heading wrapper">
        <div className="with-heading__heading">Contact us</div>
        <div className="with-heading__content">
            <ContactPanel spinnerHandler={this.spinnerHandler} contactType='1' showPackage/>
        </div>
      </section>
      
    </main>
  )
}
}

export default HireTalent