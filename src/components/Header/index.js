import React, { Component } from 'react'
import Link from 'gatsby-link'
import { translate } from "react-i18next"
import  LanguageSwitcher from '../LanguageSwitcher/index'


class Header extends Component {
  render() {
    const { t } = this.props;

    return (
      <header>
      <div className="header">    
        <div className="header__brand">  
          <Link className="" to="/">
         Skobos
          </Link>
        </div>
      
        <LanguageSwitcher/>
        
        <div className="header__menu"> 
          <div className="menu-item"> 
          <Link className="" to="/products" activeStyle={{ color: '#DE1933' }}>
          {t("products")}
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/candidates" activeStyle={{ color: '#DE1933' }}>
          {t("candidates")}
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/howitworks" activeStyle={{ color: '#DE1933' }}>
          {t("howitworks")}
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/aboutus" activeStyle={{ color: '#DE1933' }}>
          {t("aboutus")}
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to="/contact" activeStyle={{ color: '#DE1933' }}>
          {t("contact")}
          </Link>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default translate("Header")(Header);