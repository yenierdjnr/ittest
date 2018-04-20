import React from 'react';

import Logo from 'Components/Logo';
import PageFooterBar from 'Components/PageFooterBar';
import styles from './styles.module.scss';


const Footer = () => {
  return (
    <footer className={ styles['page-footer'] }>
      <div className={ styles['page-footer__content'] }>
        <Logo className={ styles['page-footer__logo-box'] }/>

        <div className={ styles['page-footer__nav'] }>
          <nav className={ styles['page-footer__menu'] }>
            <span className={ styles['page-footer__menu-title'] }>company</span>
            <ul>
              <li className={ styles['page-footer__menu-item'] }>
                <a href="#">about</a>
              </li>
              <li className={ styles['page-footer__menu-item'] }>
                <a href="/plans/">plans & pricing</a>
              </li>
              <li className={ styles['page-footer__menu-item'] }>
                <a href="#">getting started</a>
              </li>
              <li className={ styles['page-footer__menu-item'] }>
                <a href="/career-resources/">career resources</a>
              </li>
            </ul>
          </nav>
          <nav className={ styles['page-footer__menu'] }>
              <span className={ styles['page-footer__menu-title'] }>support</span>
              <ul>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="#">terms & privacy</a>
                </li>
                <li className={ styles['page-footer__menu-item'] }>
                  <a href="#">accessibility</a>
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
                  <a href="#">government</a>
                </li>
              </ul>
          </nav>
          <div className={ styles['page-footer__menu'] }>
            <span className={ styles['page-footer__contact-info-title'] }>contact</span>
            <address className={ styles['page-footer__address'] }>7525 NW 4th Blvd<br/>Gainesville, FL 32607</address>
            <a className={ styles['page-footer__tel'] } href="tel:+13526006900">352.600.6900</a>
            <a className={ styles['page-footer__email'] } href="support@itpro.tv">support@itpro.tv</a>
          </div>
        </div>
      </div>

      <PageFooterBar className={ styles['page-footer__bar'] }/>
    </footer>
  );
}


export default Footer;
