import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  return(
  <div>
    <h1>Naslovnica</h1>
    <p>Dobrodosli</p>

    <button className="btn btn--primary" onClick={handleClick}>
      Započni
    </button>

    <button className="btn btn--secondary" onClick={handleClick}>
      Nastaviti
    </button>
      
  </div>
  );
};

export default IndexPage
