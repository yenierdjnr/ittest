import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import logoBDP from 'Images/logo_BDP.png'
import logoFiserv from 'Images/logo_fiserv.png'
import logoKinex from 'Images/logo_kinex.png'
import logoMytech from 'Images/logo_mytech.png'
import logoOasis from 'Images/logo_oasis.png'


const TrustedBy = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.colXS12 }>
          <Hx className={ styles.subtitle } color={ styles.offBlack }>ITProTV is trusted by</Hx>
        </div>
      </div>
      <div className={ styles.listcapsule }>
        <div className={ `${styles['item']} ${styles.one}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoBDP } alt="BDP International" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.two}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoFiserv } alt="Fiserv" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.three}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoKinex } alt="Kinex" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.four}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoMytech } alt="My Tech Partners" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.five}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoOasis } alt="Oasis Community Learning" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default TrustedBy;
