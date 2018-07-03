import React from 'react';

import styles from './styles.module.scss';
import Para from 'Elements/Para';
import Hx from 'Elements/Hx';


const VirtualLabsHero = ({ className='', handleSwitch }) => 
  <section className={ styles.capsule }>
    <div className={ styles['intro'] }>
      <Hx size="1" className={ styles['title'] }>Virtual Labs</Hx>
      <Hx size="3" className={ styles['subtitle'] }>Try your new skills in a risk-free environment</Hx>
      <Para className={ styles['subtext'] }>Get on-demand access to cloned virtual machine environments. Access hands-on labs without expensive hardware or complex set up. You can run your virtual machine labs with multiple instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device and of course, Windows platform.</Para>
    </div>
  </section>
  ;


export default VirtualLabsHero;
