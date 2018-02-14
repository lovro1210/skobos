import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  
    <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </header>
  
)

export default Header
