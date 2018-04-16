import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../components/ContactPanel';

class Jobs extends React.Component {
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
  }

  render() {

  
  return(
    <main>
      <section className="intro wrapper">
        <h1 className="intro__title">Do you want to join us?</h1>
        <p className="intro__paragraph">We are looking for hard-working people who care about code quality</p>    
      </section>
      <section className="with-heading wrapper">
        <div className="with-heading__heading">Openings</div>
        <div className="with-heading__content">
          <article className="gallery">
            <div className="gallery__item">
              <div className="gallery__title">iOS Developer</div>
              <div className="gallery__paragraph">Only true Apple Fanboys and Fangirls welcomed.</div>
              <ul className="gallery__list">
                <li className="gallery__list-item">#iOS</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Apple</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Fluent</li>
                <li className="gallery__list-item">#English</li>
              </ul>
              <div className="link">
                <Link className="btn btn--primary btn--wide btn--center inverted" to={`jobs/iosdeveloper`}>
                  Apply
                </Link>
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__title">iOS Developer</div>
              <div className="gallery__paragraph">Only true Apple Fanboys and Fangirls welcomed.</div>
              <ul className="gallery__list">
                <li className="gallery__list-item">#iOS</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Apple</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Fluent</li>
                <li className="gallery__list-item">#English</li>
              </ul>
              <div className="link">
                <Link className="btn btn--primary btn--wide btn--center inverted" to={`jobs/iosdeveloper`}>
                  Apply
                </Link>
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__title">iOS Developer</div>
              <div className="gallery__paragraph">Only true Apple Fanboys and Fangirls welcomed.</div>
              <ul className="gallery__list">
                <li className="gallery__list-item">#iOS</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Apple</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Fluent</li>
                <li className="gallery__list-item">#English</li>
              </ul>
              <div className="link">
                <Link className="btn btn--primary btn--wide btn--center inverted" to={`jobs/iosdeveloper`}>
                  Apply
                </Link>
              </div>
            </div>
            <div className="gallery__item">
              <div className="gallery__title">iOS Developer</div>
              <div className="gallery__paragraph">Only true Apple Fanboys and Fangirls welcomed.</div>
              <ul className="gallery__list">
                <li className="gallery__list-item">#iOS</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Apple</li>
                <li className="gallery__list-item">#Swift</li>
                <li className="gallery__list-item">#Fluent</li>
                <li className="gallery__list-item">#English</li>
              </ul>
              <div className="link">
                <Link className="btn btn--primary btn--wide btn--center inverted" to={`jobs/iosdeveloper`}>
                  Apply
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="with-heading wrapper">
        <div className="with-heading__heading">Contact us</div>
        <div className="with-heading__content">
        <ContactPanel spinnerHandler={this.spinnerHandler} contactType='2' />
        </div>
      </section>
      
    </main>
  )
}
}

export default Jobs