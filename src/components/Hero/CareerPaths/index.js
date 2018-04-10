import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';
import Breadcrumb from 'Elements/Breadcrumb';


const CareerPathsHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>IT Career Paths</Hx>
      </div>
      <div className={ styles.breadcrumb }>
        <Breadcrumb className={ styles['menu-link'] }>Career Resources</Breadcrumb>
      </div>
    </section>
  );
};


export default CareerPathsHero;
