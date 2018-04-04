import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AccessibilityContent = props => {
  return (
    <section className={ `${styles.container}` }>
        <Para className={ `${styles.summary}` } color={ styles.greyDark } >It is vital that all ITProTV content be available to all aspiring and existing IT professionals regardless of disabilities. ITPro.TV is WCAG 2.0 AA compliant. Highlights of ITProTV’s accessibility features within the service include:</Para>
    </section>
  );
};


export default AccessibilityContent;
