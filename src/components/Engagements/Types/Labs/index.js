import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';
import imageLabs from 'Images/labs.svg';
import styles from '../styles.module.scss';


class Labs extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className} ${styles.container}` }>
        <div className={ `${styles['info']} ${styles['info--flip']}` }>
          <span className={ styles['sequence-num'] }>_02</span>
          <Hx className={ styles.title } color={ styles.offBlack }>Hands-On Learning with Hosted Virtual Labs</Hx>
          <Para className={ `${styles.summary} ${styles.labs}` } color={ styles.darkGrey }>Try out your skills on virtual machine labs with multiple instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device,  and Windows platform.</Para>
          <TextLink to="/vlabs/" className={ styles.link } color={ styles.orangePrimary }>view vitural labs</TextLink>
        </div>
        <div className={ `${styles['img-box']} ${styles['img-box--flip']}` }>
          <img className={ styles['img-labs'] } src={ imageLabs } alt="labs" />
          <div id="itpservers1_hype_container" className={ styles['ani-labs'] } style={{ margin:'auto', position:'relative', width:'400px',height:'400px',overflow:'hidden' }}>
          </div>
        </div>
      </div>
    );
  }
}


export default Labs;
