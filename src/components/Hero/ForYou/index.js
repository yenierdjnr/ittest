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
        <Para size="2.8"className={ styles['subtitle'] }>Learn the IT skill you need through an expansive course library that's growing every day.</Para>
        <ButtonLink>start free trial</ButtonLink>
      </div>
    </section>
  );
};


export default ForYouHero;
