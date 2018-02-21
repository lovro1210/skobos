import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  return(
  <div>
    <h1>Homepage</h1>
    <p>Welcome to your new Gatsby site.</p>

    <button className="btn btn--primary" onClick={handleClick}>
      Get Started
    </button>

    <button className="btn btn--secondary" onClick={handleClick}>
      Continue
    </button>
      
  </div>
  );
};

export default IndexPage
