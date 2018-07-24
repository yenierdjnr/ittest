import React from 'react';

import Logo from 'Components/Logo';
import BCTWF2018 from 'Images/BCTWF2018.png';
import styles from './styles.module.scss';

const FooterMenu = () =>
  <footer className={ styles.pageFooter }>
    <div id={ styles.upperFooter } className={ styles.pageFooterRow }>
      <div className={ styles.pageFooter__logoBox }>
        <Logo />
        <img className={ styles.bctwf } src={ BCTWF2018 } alt="Best Company to Work For 2018" />
      </div>

      <div className={ styles.pageFooter__nav }>
        <div className={ styles.pageFooterRow }>
          <nav className={ styles.pageFooter__menu }>
            <span className={ styles.pageFooter__menuTitle }>company</span>
            <ul>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/about/">about</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/edutainers/">edutainers</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/team/">team</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/plans/">plans &amp; pricing</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/career-resources/">career resources</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/podcasts/">podcasts</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/webinars/">webinars</a>
              </li>
            </ul>
          </nav>
          <nav className={ styles.pageFooter__menu }>
            <span className={ styles.pageFooter__menuTitle }>support</span>
            <ul>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/eula/">EULA</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/privacy/">Privacy Policy</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/accessibility/">accessibility</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="https://help.itpro.tv/" target="_blank" rel="noopener noreferrer">FAQ</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="https://forums.itpro.tv/" target="_blank" rel="noopener noreferrer">Q&A</a>
              </li>
              <li className={ styles.pageFooter__menuItem }>
                <a href="/government/">government</a>
              </li>
            </ul>
          </nav>
          <div className={ styles.pageFooter__menu }>
            <span className={ styles.pageFooter__contactInfoTitle }>contact</span>
            <address className={ styles.pageFooter__address }>7525 NW 4th Blvd<br/>Gainesville, FL 32607</address>
            <a className={ styles.pageFooter__tel } href="tel:+13526006900">352-600-6900</a>
            <a className={ styles.pageFooter__email } href="mailto:support@itpro.tv">support@itpro.tv</a>
            <a className={ styles.pageFooter__contact } href="/contact/">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>



export default FooterMenu;
