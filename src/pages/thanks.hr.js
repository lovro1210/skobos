import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link";

const Thanks = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  return(
    <article className="contact">
    <section className="contact__panel">
    <div className="contact__title">Hvala! </div>
    <div className="contact__content">
    
    <div className="contact__button-row">
           <button className="btn btn--secondary" onClick={ () => navigateTo('')} >
              Go to home page
           </button>
           </div>
    </div>    
    </section>
  </article>
  );
};

export default Thanks