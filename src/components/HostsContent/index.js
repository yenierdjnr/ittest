import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import Tim from 'Images/tim.jpg';
import Don from 'Images/don.jpg';



const HostsContent = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.subtitle } color={ styles.offBlack }>Meet the Hosts</Hx>

      <div className={ styles.hostContainer }>
        <div className={ styles.img }>
          <img className={ styles.headshot } src={ Tim } alt="Tim Broom photo" />
        </div>
        <div className={ styles.bio }>
          <Para className={ styles.name } color={ styles.offBlack }>Adam Gordon</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Adam has 30+ years as an IT instructor in the private and public sectors. He holds more than 160 IT certifications. He has trained thousands of IT pros over the course of his career.</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Certifications: 160+</Para>
        </div>
      </div>

    </section>
  );
};


export default HostsContent;
