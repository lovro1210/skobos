import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../components/ContactPanel';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailError : "",
                    showSpinner : false}
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
          <article className="contact__panel">
            <form action="" className="contact__form" onSubmit={this.handleSubmit}>
              <div className={this.state.name === undefined || this.state.name.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
                 <input maxLength="40" type="text" id="name" name="name" onChange={this.handleChange} placeholder="Full name *"/>
                 <span className="contact__input-underline"></span>
              </div>
              <div className={this.state.email === undefined || this.state.email.length > 0  ? 'contact__input-wrapper ' + this.state.emailError : 'contact__input-wrapper contact__input-wrapper--error'}>
                <input maxLength="50" type="text" id="email" name="email"  onChange={this.handleChange} placeholder="E-mail adress *"/>
                <span className="contact__input-underline"></span>
              </div>
              <div className={this.state.phone === undefined || this.state.phone.length > 0  ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
                <input maxLength="20" type="text" id="number" name="number" onChange={this.handleChange} placeholder="Phone number *"/>
                <span className="contact__input-underline"></span>
              </div>
              <div className={this.state.position === undefined || this.state.position.length > 0  ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
                <input maxLength="50" type="text" id="position" name="position" onChange={this.handleChange} placeholder="What position are you applying for? *"/>
                <span className="contact__input-underline"></span>
              </div>
              <div className='contact__input-wrapper'>
                <input maxLength="50" type="text" id="linkedin" name="linkedin" onChange={this.handleChange} placeholder="LinkedIn profile"/>
                <span className="contact__input-underline"></span>
                <div className="contact__input-remark">e.g. https://www.linkedin.com/in/jana-doe</div>
              </div>
              <div className='contact__input-wrapper'>
                <input maxLength="50" type="text" id="website" name="website" onChange={this.handleChange} placeholder="Website"/>
                <span className="contact__input-underline"></span>
              </div>

              <div className='contact__full-wrapper'>
                <button className="btn btn--tertiary btn--wide inverted">
                  Upload a CV *
                </button>
              </div>
              <div className="contact__button-row">
              <button className="btn btn--primary btn--wide inverted" type="submit" >
                  Apply
              </button>
              </div>
            </form> 
          </article>
        </div>
      </section>
      
    </main>
  )
}
}

export default Jobs