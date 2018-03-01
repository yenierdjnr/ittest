import React from 'react';

import { IconTW, IconFB, IconLN, IconYT } from 'Elements/Icons';
import styles from './styles.module.scss';


const PageFooterBar = props => {
  const { className='' } = props;

  return (
    <footer className={ className }>
      <div className={ styles['social-media'] }>
        <a href="https://twitter.com/itprotv">
          <IconTW />
        </a>
        <a href="https://facebook.com/ITProTV">
          <IconFB />
        </a>
        <a href="https://www.linkedin.com/company/itprotv">
          <IconLN />
        </a>
        <a href="https://www.youtube.com/user/ITProTVChannel">
          <IconYT />
        </a>
      </div>
      <span className={ styles['copyright'] }>© ITProTV 2018</span>
    </footer>
  );
}


export default PageFooterBar;
