import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const VirtualLabsHero = ({ className='', handleSwitch }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Virtual Labs</Hx>
      </div>
    </section>
  );
};


export default VirtualLabsHero;
