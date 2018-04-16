import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../components/ContactPanel';
import Loader from '../components/Loader';

class AboutUs extends React.Component {
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
        <h1 className="intro__title">Welcome to our <br/>Software Home.</h1>
        <p className="intro__paragraph">We focus on outcomes. We get results. <br/>We build software solutions that last.</p>    
      </section>
      <section className="with-heading wrapper">
        <div className="with-heading__heading">Our work</div>
        <div className="with-heading__content">
          <article className="panel">
            <div className="panel__content">
              <img src='http://via.placeholder.com/48x48' className="panel__logo" alt="Logo"></img>
              <h2 className='panel__title'>Mobile app</h2>
              <p className='panel__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className='panel__list'>
                <div className='panel__list-title'>Tehnologies:</div>
                <ul className='panel__list-items'>
                  <li className='panel__list-item'>Objective-C</li>
                  <li className='panel__list-item'>Swift</li>
                  <li className='panel__list-item'>CoreData</li>
                  <li className='panel__list-item'>React</li>
                  <li className='panel__list-item'>Redux</li>
                </ul>
              </div>
            </div>
            <div className="panel__picture">
              <img src='http://via.placeholder.com/210x420'></img>
              <button className="btn btn--primary panel__picture-btn" onClick={this.handleClick}>
                  View case study
              </button>
            </div>
          </article>
        </div>
      
        <article className="panel2">
          <img src='http://via.placeholder.com/48x48' className="panel2__logo" alt="Logo"></img>
          <div className="panel2__content">
            <h2 className='panel2__title'>Dashboard</h2>
            <p className='panel2__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='panel2__list'>
              <div className='panel2__list-title'>Tehnologies:</div>
              <ul className='panel2__list-items'>
                <li className='panel2__list-item'>Objective-C</li>
                <li className='panel2__list-item'>Swift</li>
                <li className='panel2__list-item'>CoreData</li>
                <li className='panel2__list-item'>React</li>
                <li className='panel2__list-item'>Redux</li>
              </ul>
            </div>
            <div className="panel2__picture">
              <img src='http://via.placeholder.com/621x238'></img>
              <button className="btn btn--primary panel2__picture-btn" onClick={this.handleClick}>
                View case study
              </button>
            </div>
          </div>
        </article>
        <div className="link">
          <Link className="btn btn--primary inverted btn--section" to={`work`}>
            See our work
          </Link>
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
            <ContactPanel spinnerHandler={this.spinnerHandler} contactType='1' />
        </div>
      </section>
      
    </main>
  )
}
}

export default AboutUs