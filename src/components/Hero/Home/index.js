import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const HomeHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>IT Training That’s Effective & Entertaining</Hx>
        <Para className={ styles['subtitle'] }>Build or expand your IT career and enjoy the journey. Access binge-worthy learning™ for every IT pro.</Para>
        <Link to="/plans/" className={ styles['link'] }>start free trial</Link>
      </div>
    </section>
  );
};


export default HomeHero;
