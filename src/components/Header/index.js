import React, { Component } from 'react'
import Link from 'gatsby-link'
import SelectLanguage from '../SelectLanguage'
import { FormattedMessage } from 'react-intl'
import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage
} from 'ptz-i18n'


const Header = (props, langKey) => {
  let menuClass = "side-menu";

  function openMenu(e) {
    e.preventDefault();    
    menuClass = "side-menu is-open";
    console.log(menuClass);
  }

  function closeMenu(e) {
    e.preventDefault();    
    menuClass = "side-menu";
    console.log(menuClass);
  }

  return(
      <header>      
      <div className="header">    
        <div className="header__brand">  
          <Link className="" to="/">
            Skobos
          </Link>
        </div>        
        <div className="header__menu"> 
         
          <Link className="menu-item" to={`products`} activeClassName="is-active">
          <FormattedMessage id="products" />
          </Link>
         
          <Link className="menu-item" to={`candidates`} activeClassName="is-active">
          <FormattedMessage id="candidates" />
          </Link>
         
          <Link className="menu-item" to={`howitworks`} activeClassName="is-active">
          <FormattedMessage id="howitworks" />
          </Link>
         
          <Link className="menu-item" to={`aboutus`} activeClassName="is-active">
          <FormattedMessage id="aboutus" />
          </Link>
         
          <Link className="menu-item" to={`contact`} activeClassName="is-active">
          <FormattedMessage id="contact" />
          </Link>

          <div className="menu-lang"> 
          <SelectLanguage langs={props.langs} />
          </div>
        </div>
      </div>

      <div className="header-mobile">           
        <div className="header__brand">  
          <div className="header-hamburger" onClick={openMenu}>
            X
          </div> 
          <Link className="" to="/">
            Skobos
          </Link>
        </div>   
        <div className="menu-lang"> 
          <SelectLanguage langs={props.langs} />
          </div>     
        <side className={menuClass}> 
          <div className="side-menu__title">
          <Link className="" to="/">
            Skobos
          </Link>
          <div className="close" onClick={closeMenu}>
            X
          </div> 
          </div>
        
          <Link className="side-menu__item" to={`products`} activeClassName="is-active">
          <FormattedMessage id="products" />
          </Link>
          
          <Link className="side-menu__item" to={`candidates`} activeClassName="is-active">
          <FormattedMessage id="candidates" />
          </Link>
         
          <Link className="side-menu__item" to={`howitworks`} activeClassName="is-active">
          <FormattedMessage id="howitworks" />
          </Link>
          
          <Link className="side-menu__item" to={`aboutus`} activeClassName="is-active">
          <FormattedMessage id="aboutus" />
          </Link>
           
          <Link className="side-menu__item" to={`contact`} activeClassName="is-active">
          <FormattedMessage id="contact" />
          </Link>
          
        </side>
      </div>

    </header>
  );
};


export default Header;