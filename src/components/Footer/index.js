import React from 'react';

import PageFooterBar from 'Components/PageFooterBar';
import FooterMenu from 'Components/FooterMenu';
import HrRow from 'Components/HrRow';
import styles from './styles.module.scss';


const Footer = () =>
  <footer className={ styles.pageFooter }>
    <FooterMenu className={ styles.pageFooter__menu }/>
    <HrRow/>
    <PageFooterBar className={ styles.pageFooter__bar }/>
  </footer>



export default Footer;
