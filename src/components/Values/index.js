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

      <div className={ styles.icon }>
        <ul className={ styles.listContainer }>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoBDP } alt="" />
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoFiserv } alt="" />
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoKinex } alt="" />
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoBDP } alt="" />
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoFiserv } alt="" />
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ `${styles['logo']} ${styles.paths}` }>
              <img src={ logoKinex } alt="" />
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
};


export default Values;
