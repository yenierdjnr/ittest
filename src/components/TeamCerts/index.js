import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ForTeamsVideo } from 'Components/Videos';


const TeamCerts = props => {
  return (
    <section className={ styles.container }>
      <Hx color={ styles.offBlack } size="2" className={ styles.intro }>Team earns 40 certifications  in 12 months</Hx>
      <ForTeamsVideo className={ styles.video }/>
      <div className={ styles.testimonial }>
        <span className={ styles['quote-symbol']} >“</span>
        <div>
          <Para className={ styles.quote } color={ styles.offBlack } size="2.4">I had 110 engineers in the field and we had dozens of ITProTV accounts. Last year alone, they passed over 40 certs.</Para>
          <span className={ styles.author }>James Packer, Kirk ISS</span>
        </div>
      </div>
    </section>
  );
};


export default TeamCerts;
