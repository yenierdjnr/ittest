import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const TestContent = props => {
  return (
    <section className={ styles.container }>
        <Para className={ styles.content } color={ styles.greyDark } >Take and re-take practice tests so you're confident when you sit for the exam. Access practice tests from Kaplan IT Training (formerly Transcender) with your ITProTV membership.</Para>
        <ul className={ styles.accessibilityStyle } color={ styles.greyDark } >
          <li>Accessibilities Controls for Primary and Audio players</li>
          <li>Accessibilities Controls for Live video player</li>
          <li>Course Library tabbing</li>
          <li>Ratings</li>
          <li>Shortcut to download button</li>
          <li>Tabbing shortcuts to content, to video player, and to top of navigation</li>
          <li>Labeled carousel buttons</li>
          <li>Language on the main html tag</li>
          <li>Roles on the navigation bar menu</li>
        </ul>
    </section>
  );
};


export default TestContent;
