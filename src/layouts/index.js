import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import i18n from './i18n'

import "../styles/main.scss"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Skobos"
      meta={[
        { name: 'description', content: 'Skobos' },
        { name: 'keywords', content: 'Skobos' },
      ]}
    />
    <div className="container">
      <Header />
      <main>
        {children()}
      </main>
      <Footer/>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

