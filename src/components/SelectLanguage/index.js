import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <li key={lang.langKey}>
      <Link to={lang.link} activeClassName="is-active">      
        {lang.langKey}     
      </Link>
    </li>
  );
  
/*
  let length = props.langs.length;
  let pom = props.langs[0].link;
  console.log(pom);
  for(let i = 0; i < length; i++) {
    props.langs[i].link = props.langs[(i+1) % length].link;    
  }
  props.langs[length-1].link = pom;   
  console.log(props.langs);
*/

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