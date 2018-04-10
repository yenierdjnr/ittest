import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import logoBDP from 'Images/logo_BDP.png'
import logoFiserv from 'Images/logo_fiserv.png'
import logoKinex from 'Images/logo_kinex.png'



const Values = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.subtitle } color={ styles.offBlack }>Values:</Hx>

      <ul className={ styles.listContainer }>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoBDP } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We exist for our members</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoFiserv } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We exude passion with personality</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoKinex } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We create effective content daily</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoBDP } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We work with honor</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoFiserv } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We willingly face challenges with optimism</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ logoKinex } alt="" />
            <Para className={ styles.value } color={ styles.offBlack }>We produce excellence through innovation and imagination</Para>
          </div>
        </li>
      </ul>

    </section>
  );
};


export default Values;
