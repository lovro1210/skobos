import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <article className="contact">
    <section className="contact__panel">
      <div className="contact__title">Get in touch with us</div>
      <div className="contact__content">
        <form>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
              <div> Full name </div>
              <input type="text"/>
            </div>
            <div className="contact__input-wrapper">
              <div> Email address </div>
              <input type="email"/>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <div> Subject </div>
             <input type="text"/>
            </div>
           </div>
           <div className="contact__form-row">
            <div className="contact__input-wrapper">
             <div> Your message </div>
             <textarea  rows="5" cols="50"/>
            </div>
           </div>
        </form>  
      </div>    
    </section>
  </article>
)

export default Contact