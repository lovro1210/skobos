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


const Header = (props, langKey) => (
      <header>
      <div className="header">    
        <div className="header__brand">  
          <Link className="" to="/">
         Skobos
          </Link>
        </div>
        <SelectLanguage langs={props.langs} />
        <div className="header__menu"> 
          <div className="menu-item"> 
          <Link className="" to={`products`} activeStyle={{ color: '#DE1933' }}>
          <FormattedMessage id="products" />
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to={`candidates`} activeStyle={{ color: '#DE1933' }}>
          <FormattedMessage id="candidates" />
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to={`howitworks`} activeStyle={{ color: '#DE1933' }}>
          <FormattedMessage id="howitworks" />
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to={`aboutus`} activeStyle={{ color: '#DE1933' }}>
          <FormattedMessage id="aboutus" />
          </Link>
          </div>
          <div className="menu-item"> 
          <Link className="" to={`contact`} activeStyle={{ color: '#DE1933' }}>
          <FormattedMessage id="contact" />
          </Link>
          </div>
        </div>
      </div>
    </header>
    );


export default Header;