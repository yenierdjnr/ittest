import React from 'react';
import styles from './styles.module.scss';

import Hx from 'Elements/Hx';


const Enterprise = ({className='', color="" }) => {
    return (
      <section className={ styles.container }>
        <Hx className={ styles.title } color={ color }size="6">premium</Hx>
        <span className={ styles.subtitle }>best value</span>
      </section>
    );
};


export default Enterprise;
