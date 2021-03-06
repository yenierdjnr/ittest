import React from 'react';
import { Link } from "gatsby";

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const HomeHero = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.intro }>
          <Hx size="1" className={ styles.title }>IT Training That's Effective &amp; Entertaining</Hx>
          <Para className={ styles.subtitle }>Build or expand your IT career and enjoy the journey. Access binge-worthy learning<sup style={{fontSize: 15 + 'px', top: -9 + 'px'}}>TM</sup> for every IT pro.</Para>
          <Link to="/plans/" className={ styles.link }>start free trial</Link>
        </div>
      </div>
    </section>
  );
};


export default HomeHero;
