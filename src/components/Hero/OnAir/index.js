import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';


const OnAir = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="2" className={ styles['title'] }>See what's happening right now in the ITProTV studios. </Hx>
        <Para size="2.4"className={ styles['subtitle'] }>Catch pre-recorded sessions when we're not live. A free, no-obligation membership is required for live sessions and to access chat.</Para>
        <ButtonLink className={ styles.link }>Join for Free</ButtonLink>
      </div>
    </section>
  );
};


export default OnAir;
