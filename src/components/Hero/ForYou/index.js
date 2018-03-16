import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';


const ForYouHero = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Learn IT, pass your certs,  & accelerate your career.</Hx>
        <Para size="2.8" className={ styles['subtitle'] }>Whether you're new to IT or a pro, binge on TV that will change your life</Para>
        <ButtonLink>start free trial</ButtonLink>
      </div>
    </section>
  );
};


export default ForYouHero;
