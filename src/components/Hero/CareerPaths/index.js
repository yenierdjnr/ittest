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
      <Breadcrumb className={ styles['menu-link'] }>IT Career Paths</Breadcrumb>
    </section>
  );
};


export default CareerPathsHero;
