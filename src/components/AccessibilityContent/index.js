import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AccessibilityContent = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.colXS12 }>
        <Para className={ styles.content } color={ styles.greyDark } >It is vital that all ITProTV content be available to all aspiring and existing IT professionals regardless of disabilities. ITPro.TV is WCAG 2.0 AA compliant. Highlights of ITProTV's accessibility features within the service include:</Para>
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
        <Para className={ styles.content } color={ styles.greyDark } >If you have any questions or concerns regarding accessibility, please email <a className={ styles['email'] } href="mailto:support@itpro.tv">support@itpro.tv</a>.</Para>
      </div>
    </section>
  );
};


export default AccessibilityContent;
