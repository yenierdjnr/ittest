import React from 'react';

import Logo from 'Components/Logo';
import PageFooterBar from 'Components/PageFooterBar';
import FooterMenu from 'Components/FooterMenu';
import HrRow from 'Components/HrRow';
import styles from './styles.module.scss';


const Footer = () => {
  return (
    <footer className={ styles['page-footer'] }>
      <FooterMenu className={ styles['page-footer__menu'] }/>
      <HrRow/>
      <PageFooterBar className={ styles['page-footer__bar'] }/>
    </footer>
  );
}


export default Footer;
