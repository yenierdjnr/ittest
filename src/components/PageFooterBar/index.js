import React from 'react';

import { IconFB, IconInsta, IconLN, IconTW, IconYT } from 'Elements/Icons';
import styles from './styles.module.scss';


const PageFooterBar = () =>
  <footer>
    <div className={ styles['page-footer__social'] }>
      <a href="https://twitter.com/itprotv" target="_blank" rel="noopener noreferrer">
        <IconTW />
      </a>
      <a href="https://facebook.com/ITProTV" target="_blank" rel="noopener noreferrer">
        <IconFB />
      </a>
      <a href="https://www.linkedin.com/company/itprotv" target="_blank" rel="noopener noreferrer">
        <IconLN />
      </a>
      <a href="https://www.youtube.com/user/ITProTVChannel" target="_blank" rel="noopener noreferrer">
        <IconYT />
      </a>
      <a href="https://www.instagram.com/itpro.tv/" target="_blank" rel="noopener noreferrer">
        <IconInsta />
      </a>
    </div>
    <div className={ styles['page-footer__copyright'] }>
      <span className={ styles['copyright'] }>© ITProTV 2018</span>
    </div>
  </footer>



export default PageFooterBar;
