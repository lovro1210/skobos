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


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {   
    this.setState({isOpen: true});    
  }

  closeMenu() {        
    this.setState({isOpen: false});  
  }

  render() {
    return(
      <header>      
      <div className="header">    
        <div className="header__brand">  
          <Link className="" to="/">
            Skobos
          </Link>
        </div>        
        <div className="header__menu"> 
         
        <Link className="menu-item" to={`aboutus`} activeClassName="is-active">
          <FormattedMessage id="aboutus" />
          </Link>

          <Link className="menu-item" to={`products`} activeClassName="is-active">
          <FormattedMessage id="products" />
          </Link>
         
          <Link className="menu-item" to={`candidates`} activeClassName="is-active">
          <FormattedMessage id="candidates" />
          </Link>
   
          <Link className="menu-item" to={`contact`} activeClassName="is-active">
          <FormattedMessage id="contact" />
          </Link>

          <div className="menu-lang"> 
          <SelectLanguage langs={this.props.langs} />
          </div>
        </div>
      </div>

      <div className="header-mobile">           
        <div className="header__brand">  
          <div className="header-hamburger" onClick={this.openMenu}>
            X
          </div> 
          <Link className="" to="/">
            Skobos
          </Link>
        </div>   
        <div className="menu-lang"> 
          <SelectLanguage langs={this.props.langs} />
          </div>     
        <side className={this.state.isOpen ? 'side-menu is-open' : 'side-menu'}> 
          <div className="side-menu__title">
          <Link className="" to="/">
            Skobos
          </Link>
          <div className="close" onClick={this.closeMenu}>
            X
          </div> 
          </div>
        
          <Link className="side-menu__item" to={`products`} activeClassName="is-active" onClick={this.closeMenu}>
          <FormattedMessage id="products" />
          </Link>
          
          <Link className="side-menu__item" to={`candidates`} activeClassName="is-active" onClick={this.closeMenu}>
          <FormattedMessage id="candidates" />
          </Link>          
          
          <Link className="side-menu__item" to={`aboutus`} activeClassName="is-active" onClick={this.closeMenu}>
          <FormattedMessage id="aboutus" />
          </Link>
           
          <Link className="side-menu__item" to={`contact`} activeClassName="is-active" onClick={this.closeMenu}>
          <FormattedMessage id="contact" />
          </Link>
          
        </side>
      </div>

    </header>
  );
  }
}

export default Header;