import React from 'react'
import Link from 'gatsby-link'
import ContactPanel from '../../components/ContactPanel';
import Loader from '../../components/Loader';

class IosDeveloper extends React.Component {
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
        <ContactPanel spinnerHandler={this.spinnerHandler} contactType='2' />
        </div>
      </section>
      
    </main>
  )
}
}

export default IosDeveloper