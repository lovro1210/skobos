import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  
    <header>
      <div className="header">    
        <div className="header__brand">  
          <Link className="" to="/">
            SKOBOS
          </Link>
        </div>
        <div className="header__menu"> 
          <div className="menu-item"> 
          <Link className="" to="/products" activeStyle={{ color: '#DE1933' }}>
            Products
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/candidates" activeStyle={{ color: '#DE1933' }}>
            Candidates
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/howitworks" activeStyle={{ color: '#DE1933' }}>
            How it works
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/aboutus" activeStyle={{ color: '#DE1933' }}>
            About us
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/contact" activeStyle={{ color: '#DE1933' }}>
            Contact
          </Link>
          </div>
        </div>
      </div>
    </header>
  
)

export default Header
