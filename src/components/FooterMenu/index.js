import React from 'react';

import Logo from 'Components/Logo';
import styles from './styles.module.scss';

const FooterMenu = () => {
  return (
    <footer className={ styles['page-footer'] }>
      <div id={ styles['upperFooter'] } className={ styles['page-footer-row'] }>
        <Logo className={ styles['page-footer__logo-box'] }/>

        <div className={ styles['page-footer__nav'] }>
          <div className={ styles['page-footer-row'] }>
            <nav className={ styles['page-footer__menu'] }>
              <span className={ styles['page-footer__menu-title'] }>company</span>
              <ul>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/about/">about</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/edutainers/">edutainers</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/team/">team</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/plans/">plans & pricing</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/career-resources/">career resources</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="/podcasts/">podcasts</a>
                </li>
              </ul>
            </nav>
            <nav className={ styles['page-footer__menu'] }>
                <span className={ styles['page-footer__menu-title'] }>support</span>
                <ul>
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="/eula/">EULA</a>
                  </li>
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="/privacy/">Privacy Policy</a>
                  </li>
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="/accessibility/">accessibility</a>
                  </li>
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="https://help.itpro.tv/" target="_blank">FAQ</a>
                  </li>
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="https://forums.itpro.tv/" target="_blank">Q&A</a>
                  </li>
                  {/*}<li className={ styles['page-footer__menu-item'] }>
                    <a href="#">blog</a>
                  </li>*/}
                  <li className={ styles['page-footer__menu-item'] }>
                    <a href="/government/">government</a>
                  </li>
                </ul>
            </nav>
            <div className={ styles['page-footer__menu'] }>
              <span className={ styles['page-footer__contact-info-title'] }>contact</span>
              <address className={ styles['page-footer__address'] }>7525 NW 4th Blvd<br/>Gainesville, FL 32607</address>
              <a className={ styles['page-footer__tel'] } href="tel:+13526006900">352-600-6900</a>
              <a className={ styles['page-footer__email'] } href="mailto:support@itpro.tv">support@itpro.tv</a>
              <a className={ styles['page-footer__contact'] } href="/contact/">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default FooterMenu;
