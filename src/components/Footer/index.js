import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="wrapper rel">
      <div className="footer__element"></div>
      <div className="footer__content">
        <div className="footer__shares">
          <Link className="footer__item" to={`work`}>
            <img src='http://via.placeholder.com/32x32' className="" alt="Face"></img>
          </Link>
          <Link className="footer__item" to={`work`}>
            <img src='http://via.placeholder.com/32x32' className="" alt="LinkIn"></img>
          </Link>
          <Link className="footer__item" to={`work`}>
            <img src='http://via.placeholder.com/32x32' className="" alt="Twit"></img>
          </Link>
          <Link className="footer__item" to={`work`}>
            <img src='http://via.placeholder.com/32x32' className="" alt="Inst"></img>
          </Link>
        </div>
        <div className="footer__col1">
          <div className="">
            <Link className="footer__brand" to={`aboutus`}>
              <img src='http://via.placeholder.com/40x40' className="footer__logo" alt="logo"></img>
              <div className="footer__brand-name">Skobos</div>
            </Link></div>
          <div className="footer__link">+385 99 617 823</div>
          <div className="footer__link">marijan_greguric@skobos.com</div>
          <div className="footer__link">skobos@skobos.com</div>
        </div>
        <div className="footer__col2">
          <div className="footer__title">Quick links</div>
          <div className="footer__link">
            <Link className="" to={`aboutus`}>
              <FormattedMessage id="aboutus" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`work`}>
              <FormattedMessage id="work" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`jobs`}>
              <FormattedMessage id="jobs" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`hiretalent`}>
              <FormattedMessage id="hiretalent" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`contact`}>
              <FormattedMessage id="contact" />
            </Link>
          </div>
        </div>
        <div className="footer__col3">
          <div className="footer__title">Resources</div>
          <div className="footer__link">
            <Link className="" to={`aboutus`}>
              <FormattedMessage id="aboutus" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`work`}>
              <FormattedMessage id="work" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`jobs`}>
              <FormattedMessage id="jobs" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`hiretalent`}>
              <FormattedMessage id="hiretalent" />
            </Link>
          </div>
        </div>
        <div className="footer__col4">
          <div className="footer__title">Job openings</div>
          <div className="footer__link">
            <Link className="" to={`aboutus`}>
              <FormattedMessage id="aboutus" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`work`}>
              <FormattedMessage id="work" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`jobs`}>
              <FormattedMessage id="jobs" />
            </Link>
          </div>
          <div className="footer__link">
            <Link className="" to={`hiretalent`}>
              <FormattedMessage id="hiretalent" />
            </Link>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  </footer>
)

export default Footer
