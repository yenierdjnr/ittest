import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';
import Breadcrumb from 'Elements/Breadcrumb';


const NetworkTechnologyHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Network Technology</Hx>
      </div>
      <div className={ styles.breadcrumb }>
        <Link to="/career-resources/career-paths/">
          <Breadcrumb className={ styles['menu-link'] }>Career Paths</Breadcrumb>
        </Link>
      </div>
    </section>
  );
};


export default NetworkTechnologyHero;
