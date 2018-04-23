import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPeople } from 'Elements/Icons';



const Values = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.subtitle } color={ styles.offBlack }>Values:</Hx>

      <ul className={ styles.listContainer }>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We exist for our members</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We exude passion with personality</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We create effective content daily</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We work with honor</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We willingly face challenges with optimism</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>We produce excellence through innovation and imagination</Para>
          </div>
        </li>
      </ul>

    </section>
  );
};


export default Values;
