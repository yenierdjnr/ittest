import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import imageLabs from 'Images/labs.svg';
import styles from '../styles.module.scss';


class Labs extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className}` }>
        <div className={ styles['info-cols'] }>
          <div className={ styles.info }>
            <span className={ styles['sequence-num'] }>_02</span>
            <Hx className={ styles.title } color={ styles.offBlack }>Stay Current with New Content</Hx>
            <Para className={ `${styles.summary} ${styles.exams}` } color={ styles.darkGrey }>New content is added daily so your training is always aligned with the latest UI and the current exam. Episodes go from studio to web in 24-hours.</Para>
          </div>
        </div>
        <div className={ styles['img-cols'] }>
          <div className={ styles['img-box'] }>
            <img className={ styles['img-labs'] } src={ imageLabs } alt="labs" />
          </div>
        </div>
      </div>
    );
  }
}


export default Labs;
