import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const TestContent = props => {
  return (
    <section className={ styles.container }>
        <Para className={ styles.content } color={ styles.greyDark } >Take and re-take practice tests so you're confident when you sit for the exam. Access practice tests from Kaplan IT Training (formerly Transcender) with your ITProTV membership.</Para>
        <Hx className={ styles.title } color={ styles.offBlack } size="4">Practice tests available for:</Hx>
        <ul>
          <li>Microsoft</li>
          <li>Cisco</li>
          <li>Microsoft Developer</li>
          <li>EC-Council</li>
          <li>Axelos</li>
          <li>PMI</li>
          <li>VMWare</li>
          <li>GIAC</li>
          <li>Logical Operations</li>
          <li>ISACA</li>
          <li>CompTIA</li>
          <li>(ISC)2</li>
        </ul>
    </section>
  );
};


export default TestContent;
