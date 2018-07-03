import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const TestContent = (props) => 
  <section className={ styles.capsule }>
    <div className={ styles.titleRow }>
      <div className={ styles.colXS12 }>
        <Para className={ styles.content } color={ styles.greyDark } >Take and re-take practice tests so you are confident when you sit for the exam. Access practice tests from Kaplan IT Training (formerly Transcender) with your ITProTV membership.</Para>
      </div>
    </div>
    <div className={ styles.titleRow }>
      <div className={ styles.colXS12 }>
        <Hx className={ styles.title } color={ styles.offBlack } size="4">Practice tests available for:</Hx>
      </div>
    </div>
    <div className={ styles.listcapsule }>
      <div className={ styles.item }>
        <Para className={ styles.title } color={ styles.offBlack }>Microsoft</Para>
        <Para className={ styles.title } color={ styles.offBlack }>Cisco</Para>
        <Para className={ styles.title } color={ styles.offBlack }>CompTIA</Para>
        <Para className={ styles.title } color={ styles.offBlack }>EC-Council</Para>
      </div>
      <div className={ styles.item }>
        <Para className={ styles.title } color={ styles.offBlack }>Axelos</Para>
        <Para className={ styles.title } color={ styles.offBlack }>PMI</Para>
        <Para className={ styles.title } color={ styles.offBlack }>VMware</Para>
        <Para className={ styles.title } color={ styles.offBlack }>GIAC</Para>
      </div>
      <div className={ styles.item }>
        <Para className={ styles.title } color={ styles.offBlack }>Logical Operations</Para>
        <Para className={ styles.title } color={ styles.offBlack }>Microsoft Developer</Para>
        <Para className={ styles.title } color={ styles.offBlack }>ISACA</Para>
        <Para className={ styles.title } color={ styles.offBlack }>(ISC)<sup>2</sup></Para>
      </div>
    </div>
  </section>
  ;


export default TestContent;
