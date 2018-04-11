import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'
import "../styles/main.scss"

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const myProps = { langKey: langKey };

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
      <Helmet
      title="Skobos"
      meta={[
        { name: 'description', content: 'Skobos' },
        { name: 'keywords', content: 'Skobos' },
      ]}/>
        <div className="container">
        <Header langs={langsMenu} langKey={homeLink} />
        
        {children()}
        
        <Footer/>
      </div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
`;