import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';



const HostsContent = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.subtitle } color={ styles.offBlack }>Meet the Hosts</Hx>



    </section>
  );
};


export default HostsContent;
