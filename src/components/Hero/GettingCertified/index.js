import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';


const GettingCertifiedHero = ({ className='' }) => 
  <section className={ styles.capsule }>
    <div className={ styles.row }>
      <div className={ styles['intro'] }>
        <Link to="/career-resources/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
            Career Resources
        </Link>
        <Hx size="1" className={ styles['title'] }>Getting Certified</Hx>
        <Para className={ styles['subtitle'] }>Taking the first steps to earning IT certifications is easy with ITProTV. Click a specialization below to explore certification resources and suggested course paths.</Para>
      </div>
    </div>
  </section>
  ;


export default GettingCertifiedHero;
