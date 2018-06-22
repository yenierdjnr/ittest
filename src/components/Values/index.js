import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPeople, IconSmiley, IconCalendar, IconBadge, IconMountains, IconLightBulb } from 'Elements/Icons';



const Values = props => {
  return (
    <section className={ styles.capsule }>
      <Hx className={ styles.subtitle } color={ styles.offBlack }>Values:</Hx>

      <ul className={ styles.listcapsule }>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconLightBulb />
            <Para className={ styles.value } color={ styles.offBlack }>Producing excellence through innovation, imagination, and grit.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconCalendar />
            <Para className={ styles.value } color={ styles.offBlack }>Creating engaging content daily.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconBadge />
            <Para className={ styles.value } color={ styles.offBlack }>Working with honor.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconMountains />
            <Para className={ styles.value } color={ styles.offBlack }>Willingly facing challenges with optimism.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>Existing for our members.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <IconSmiley />
            <Para className={ styles.value } color={ styles.offBlack }>Exuding passion, personality, and perseverance.</Para>
          </div>
        </li>
      </ul>

    </section>
  );
};


export default Values;
