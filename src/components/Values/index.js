import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ICHOMP } from 'Elements/Icons';

const Values = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.titleRow }>
        <div className={ styles.colXS12 }>
          <Hx className={ styles.subtitle } color={ styles.offBlack }>ITProTV Values</Hx>
        </div>
      </div>
      <div className={ styles.listcapsule }>
        <div className={ styles.ichomp }>
          <ICHOMP />
        </div>
      </div>
      <div className={ styles.listcapsule }>
        <div className={ styles.item }>
          <Para className={ styles.value } color={ styles.offBlack }>Producing excellence through <span className={ styles.blue }>i</span>nnovation, imagination, and grit.</Para>
          <Para className={ styles.value } color={ styles.offBlack }>Creating engaging <span className={ styles.orange }>C</span>ontent daily.</Para>
          <Para className={ styles.value } color={ styles.offBlack }>Working with <span className={ styles.orange }>H</span>onor.</Para>
          <Para className={ styles.value } color={ styles.offBlack }>Willingly facing challenges with <span className={ styles.orange }>O</span>ptimism.</Para>
          <Para className={ styles.value } color={ styles.offBlack }>Existing for our <span className={ styles.orange }>M</span>embers.</Para>
          <Para className={ styles.value } color={ styles.offBlack }>Exuding <span className={ styles.orange }>P</span>assion, personality, and perseverance.</Para>
        </div>
      </div>
    </section>
  );
};


export default Values;
