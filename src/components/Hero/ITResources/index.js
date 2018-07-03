import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const ITResourcesHero = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles['intro'] }>
          <Link to="/career-resources/" className={ styles.navigation }>
            <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
            Career Resources
          </Link>
          <Hx size="1" className={ styles['title'] }>IT Resources</Hx>
          <Para className={ styles['subtitle'] }>Use these resources to jumpstart your IT career or grow your IT team's skills</Para>
        </div>
      </div>
    </section>
  );
};


export default ITResourcesHero;
