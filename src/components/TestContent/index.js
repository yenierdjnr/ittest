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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </section>
  );
};


export default TestContent;
