import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AboutContent = props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.subtitle } color={ styles.offBlack }>About ITProTV</Hx>
        <Para className={ styles.content } color={ styles.greyDark } >ITProTV takes the best aspects of in-person training and delivers it online and on-demand. Attractive studios, engaging hosts and effective content make ITProTV the choice of IT professionals globally.</Para>
        <Hx className={ styles.subtitle } color={ styles.offBlack }>About ITProTV</Hx>
        <Para className={ styles.content } color={ styles.greyDark } >ITProTV takes the best aspects of in-person training and delivers it online and on-demand. Attractive studios, engaging hosts and effective content make ITProTV the choice of IT professionals globally.</Para>
    </section>
  );
};


export default AboutContent;
