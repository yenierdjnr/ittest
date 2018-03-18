import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import ButtonSwitch from 'Elements/ButtonSwitch';


const Plans = ({ className='', handleSwitch }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Choose a Plan</Hx>
        <ButtonSwitch className={ styles.switch } handleSwitch={ handleSwitch } />
      </div>
    </section>
  );
};


export default Plans;