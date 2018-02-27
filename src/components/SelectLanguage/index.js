import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

export default class SelectLanguage extends React.Component {
  constructor(props) {
    super(props);

    for(let i = 0; i < props.langs.length; i++) {      
      if (props.langs[i].selected){
        var x = i;
      }   
    }  
    this.state = {index : x};    

    this.handleChange = this.handleChange.bind(this);        
  }

  handleChange(e){
    this.setState((prevState, props) => ({
      index: (prevState.index + 1) % props.langs.length
    }));    
  }

  render() {
    let langs = this.props.langs;
    let length = langs.length;
    let links = Array(length);
    
    for(let i = 0; i < length; i++) {
      links[i] = langs[(i+1) % length].link;       
    }     
    
    return(
      <div className="language">
      <ul className="language__list">   
        <li key={langs[this.state.index].langKey}>   
          <Link to={links[this.state.index]} activeClassName="is-active" onClick={this.handleChange}>      
            {langs[this.state.index].langKey}     
          </Link> 
        </li>
      </ul>
    </div>
    );
  }
}


/*
const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <li key={lang.langKey}>
      <Link to={lang.link} activeClassName="is-active">      
        {lang.langKey}     
      </Link>
    </li>
  );
  
  return (
    <div className="language">
      <ul className="language__list">      
        {links}      
      </ul>
    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
*/