import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  
    <header>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1> */}
        <Link className="h-branditem" to="/">
          SKOBOS
        </Link>
        <Link className="h-item" to="/products/">
          Products
        </Link>
        <Link className="h-item" to="/candidates">
          Candidates
        </Link>
        <Link className="h-item" to="/howitworks">
          How it works
        </Link>
        <Link className="h-item" to="/aboutus">
          About us
        </Link>
        <Link className="h-item" to="/contact">
          Contact
        </Link>
    </header>
  
)

export default Header
