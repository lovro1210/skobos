import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../../components/ContactPanel';

class IosDeveloper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailError : "",
                    showSpinner : false}
  }
  handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  render() {

  
  return(
    <main>
      <section className="intro wrapper">      
        <h1 className="intro__title">iOS developer</h1>
        <p className="intro__paragraph">Only true Apple Fanboys and Fangirls welcomed.</p>    
      </section>
      <section className="with-heading wrapper">
        <div className="with-heading__heading">Who are we?</div>
        <div className="with-heading__content">
          <article className="panel3">
                <ul className='panel3__list'>
                    <li className='panel3__list-item'>A hard working team of professionals with a fresh look on the software world</li>
                    <li className='panel3__list-item'>Born in Amsterdam, surrounded by  team of professionals</li>
                    <li className='panel3__list-item'>Proud of successful execution of numerous software products and gaining a lot of satisfied customers</li>
                    <li className='panel3__list-item'>200+ experts in our database and still growing...</li>
                </ul>
          </article>
        </div>
      </section>

      <section className="with-heading wrapper">
        <div className="with-heading__heading">Your job</div>
        <div className="with-heading__content">
          <article className="panel3">
                <ul className='panel3__list'>
                    <li className='panel3__list-item'>Translate designs into code</li>
                    <li className='panel3__list-item'>Design, build, and maintain efficient, reusable, and reliable code</li>
                    <li className='panel3__list-item'>Make strategic technical decisions related to new products and functionalities</li>
                    <li className='panel3__list-item'>Help maintain code quality</li>
                    <li className='panel3__list-item'>Take smart risks and champion new ideas</li>
                </ul>
          </article>
        </div>
      </section>

      <section className="with-heading wrapper">
        <div className="with-heading__heading">About you</div>
        <div className="with-heading__content">
          <article className="panel3">
                <ul className='panel3__list'>
                    <li className='panel3__list-item'>You must have at least 3 years of professional iOS development experience</li>
                    <li className='panel3__list-item'>You must be up to date with all cutting edge iOS technologies</li>
                    <li className='panel3__list-item'>Extensive mastery of Objective-C and Swift is a must, including experience with Core Data, Core Animation, Foundation, and UIKit</li>
                    <li className='panel3__list-item'>Open to receiving constructive feedback</li>
                    <li className='panel3__list-item'>Be comfortable with iterative and incremental development</li>
                </ul>
          </article>
        </div>
      </section>
      
      <section className="with-heading wrapper">
        <div className="with-heading__heading">Hire talent</div>
        <div className="with-heading__content">
          <article className="row3">
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">HP Omen</div>
            </div>
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">New phone</div>
            </div>
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">Flexible hours</div>
            </div>
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">Working from home</div>
            </div>
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">New office</div>
            </div>
            <div className="row3__item">
              <img src='http://via.placeholder.com/48x48' className="row3__item-icon" alt="pic"></img>
              <div className="row3__item-text">Interesting projects</div>
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

export default IosDeveloper