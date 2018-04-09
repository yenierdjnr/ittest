import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const TrustedBy = props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.subtitle } color={ styles.offBlack }>ITProTV is trusted by</Hx>

    </section>
  );
};


export default TrustedBy;
