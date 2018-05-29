import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const CareerResourcesHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] } color={ styles.offBlack }>IT Career Resources</Hx>
        <Para className={ styles['subtitle'] } color={ styles.offBlack }>Not sure where to start? ITProTV can help. Get info on the many careers paths and the certifications you'll need. Plus, get insights from IT pros via articles and more.</Para>
      </div>
    </section>
  );
};


export default CareerResourcesHero;
