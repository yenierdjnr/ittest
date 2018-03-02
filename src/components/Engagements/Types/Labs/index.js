import React from 'react';
import styles from '../styles.module.scss';

import imageLabs from 'Images/labs.svg'
import { IconArrowRight } from 'Elements/Icons';


const orangePrimary = '#F6621C';

const Labs = props => {
  const { className='' } = props;

  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ `${styles['info']} ${styles['info--flip']}` }>
        <span className={ styles['sequence-num'] }>_02</span>
        <h2 className={ styles.title }>Hands-on Learning with Hosted Virtual Labs</h2>
        <p className={ styles.summary }>Try out your skills on virtual machine labs with multiple instances of<br/>Windows Server and Desktop Clients on your OSX, Linux, iOS device,<br/>and Windows platform.</p>
        <a className={ styles.link } href="/vlabs/">
          <span>view vitural labs</span>
          <IconArrowRight fill={ orangePrimary }/>
        </a>
      </div>
      <div className={ `${styles['img-box']} ${styles['img-box--flip']}` }>
        <img className={ styles['img-labs'] } src={ imageLabs } alt="labs" />
      </div>
    </div>
  );
};


export default Labs;
