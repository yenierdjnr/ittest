import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPeople, IconSmiley, IconCalendar, IconBadge, IconMountains, IconLightBulb } from 'Elements/Icons';



const Values = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.titleRow }>
        <div className={ styles.colXS12 }>
          <Hx className={ styles.subtitle } color={ styles.offBlack }>Values</Hx>
        </div>
      </div>
      <ul className={ styles.listcapsule }>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconLightBulb />
            <Para className={ styles.value } color={ styles.offBlack }>Producing excellence through innovation, imagination, and grit.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconCalendar />
            <Para className={ styles.value } color={ styles.offBlack }>Creating engaging content daily.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconBadge />
            <Para className={ styles.value } color={ styles.offBlack }>Working with honor.</Para>
          </div>
        </li>
      </ul>
      <ul className={ styles.listcapsule }>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconMountains />
            <Para className={ styles.value } color={ styles.offBlack }>Willingly facing challenges with optimism.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconPeople />
            <Para className={ styles.value } color={ styles.offBlack }>Existing for our members.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ styles.logo }>
            <IconSmiley />
            <Para className={ styles.value } color={ styles.offBlack }>Exuding passion, personality, and perseverance.</Para>
          </div>
        </li>
      </ul>
    </section>
  );
};


export default Values;
