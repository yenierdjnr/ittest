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
      </div>
    </section>
  );
};


export default CareerPathsHero;
