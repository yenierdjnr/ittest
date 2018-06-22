import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import imageLabs from 'Images/labs.svg';
import styles from '../styles.module.scss';


class Labs extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className} ${styles.capsule}` }>
        <div className={ `${styles['info']} ${styles['info--flip']}` }>
          <span className={ styles['sequence-num'] }>_02</span>
          <Hx className={ styles.title } color={ styles.offBlack }>Stay Current with New Content</Hx>
          <Para className={ `${styles.summary} ${styles.exams}` } color={ styles.darkGrey }>New content is added daily so your training is always aligned with the latest UI and the current exam. Episodes go from studio to web in 24-hours.</Para>
        </div>
        <div className={ `${styles['img-box']} ${styles['img-box--flip']}` }>
          <img className={ styles['img-labs'] } src={ imageLabs } alt="labs" />
          <div id="itpservers1_hype_capsule" className={ styles['ani-labs'] } style={{ margin:'auto', position:'relative', width:'400px',height:'400px',overflow:'hidden' }}>
          </div>
        </div>
      </div>
    );
  }
}


export default Labs;
