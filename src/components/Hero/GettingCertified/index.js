import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const GettingCertifiedHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Getting Certified</Hx>
        <Para className={ styles['subtitle'] }>Taking the first steps to earning IT certifications is easy with ITProTV. Click a specialization below to explore resources and course suggestion paths.</Para>
      </div>
    </section>
  );
};


export default GettingCertifiedHero;
