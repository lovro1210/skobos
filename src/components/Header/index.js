import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  
    <header>
      <div className="header">    
        <div className="header__brand">  
          <Link className="h-branditem" to="/">
            SKOBOS
          </Link>
        </div>
        <div className="header__menu"> 
          <div className="header__menu-item"> 
          <Link className="" to="/products/">
            Products
          </Link>
          </div>
          <div className="header__menu-item"> 
          <Link className="" to="/candidates">
            Candidates
          </Link>
          </div>
          <div className="header__menu-item"> 
          <Link className="" to="/howitworks">
            How it works
          </Link>
          </div>
          <div className="header__menu-item"> 
          <Link className="" to="/aboutus">
            About us
          </Link>
          </div>
          <div className="header__menu-item"> 
          <Link className="" to="/contact">
            Contact
          </Link>
          </div>
        </div>
      </div>
    </header>
  
)

export default Header
