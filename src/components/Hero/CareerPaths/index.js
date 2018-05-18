import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const CareerPathsHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Link to="/career-resources/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Career Resources
        </Link>
        <Hx size="1" className={ styles['title'] }>IT Career Paths</Hx>
        <Para className={ styles['subtitle'] }>Not sure about the next steps in your career? Explore the learning paths below to get started. For a more hands-on approach, become a premium member to take advantage of our 1-on-1 Career Coach services.</Para>
      </div>
    </section>
  );
};


export default CareerPathsHero;
