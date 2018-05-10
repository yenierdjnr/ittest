import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import Adam from 'Images/adam.jpg';



const HostsContent = props => {
  return (
    <section className={ styles.container }>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Adam } alt="Adam Gordon photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Adam Gordon</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Adam has 30+ years as an IT instructor in the private and public sectors. He holds more than 160 IT certifications. He has trained thousands of IT pros over the course of his career.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: 160+</Para>
          </div>
        </div>

    </section>
  );
};


export default HostsContent;
