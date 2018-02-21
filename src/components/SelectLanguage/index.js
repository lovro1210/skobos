import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <li>
      <Link to={lang.link} key={lang.langKey} activeClassName="is-active">      
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