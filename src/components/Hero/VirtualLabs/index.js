import React from 'react';

import styles from './styles.module.scss';
import Para from 'Elements/Para';
import Hx from 'Elements/Hx';


const VirtualLabsHero = ({ className='', handleSwitch }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Virtual Labs</Hx>
        <Para className={ styles['subtitle'] }>Try your new skills in a risk-free environment</Para>
      </div>
    </section>
  );
};


export default VirtualLabsHero;
