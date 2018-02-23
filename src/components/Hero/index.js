import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';


const HeroHome = ({ className='' }) => {
  return (
    <section className={ `${className} ${styles.container}` }>
      <div className={ styles['intro'] }>
        <h1 className={ styles['title'] }>IT Training That’s Effective & Entertaining</h1>
        <div className={ styles['subtitle'] }>
          <span className={ styles['subtitle__sentence-1'] }>Build or expand your IT career and enjoy the journey.</span>
          <span className={ styles['subtitle__sentence-2'] }>Access binge-worthy learning™ for every IT pro.</span>
        </div>
        <Link to="/plans/" className={ styles['link'] }>try it free</Link>
      </div>
    </section>
  );
};


export default HeroHome;