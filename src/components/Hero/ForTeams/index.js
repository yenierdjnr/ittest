import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const ForTeamsHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Flexible Online Training for IT Teams of All Sizes</Hx>
        <Para className={ styles['subtitle'] }>Empower your team with the IT skills they need with <nobr>binge-worthy</nobr> learning&trade; they'll enjoy watching.</Para>
      </div>
    </section>
  );
};


export default ForTeamsHero;
