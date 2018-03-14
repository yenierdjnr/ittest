import React from 'react';

import styles from './onAir.module.scss';
import { OnAir as Hero } from 'Components/Hero';
import ChannelGuide from 'Components/ChannelGuide';


const OnAir = props => {
  return (
    <main className={ styles.onAir }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles['Channel-Guide'] }>
        <ChannelGuide />
      </section>
    </main>
  );
}


export default OnAir;
