import React from 'react';
import styles from '../styles.module.scss';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';


const Enterprise = ({ className='', info }) => {
    return (
      <section className={ styles.container }>
        <div className={ styles.description }>
          <Hx className={ styles.title } color={ styles.orange } size="6">enterprise</Hx>
          <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Track ROI of your training spend</Hx>
          <span className={ styles.perks }>Full ITProTV, OfficeProTV, DevProTV, & BizProTV  course libraries</span>
          <span className={ styles.perks }>Virtual labs</span>
          <span className={ styles.perks }>Practice exams</span>
        </div>
        <div className={ styles.pricing }>
          <Hx className={ styles.price } color={ styles.orange } size="2">Quoted on team size<span className={ styles['per-year'] }>/ year</span></Hx>
          <TextLink className={ styles.link } color={ styles.orange } size="1.6">let's talk</TextLink>
        </div>
      </section>
    );
};


export default Enterprise;
