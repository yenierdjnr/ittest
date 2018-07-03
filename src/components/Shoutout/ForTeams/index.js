import React from 'react';

import Hx from 'Elements/Hx';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';


const ForTeams = (props) => 
  <section className={ styles.capsule }>
    <div className={ styles.content }>
      <Hx className={ styles.title } color={ styles.offBlack }size="2">Training a whole team?<br/>Ask about corporate membership.</Hx>
      <ButtonLink to="/for-teams/" className={ styles['button'] }>training for teams</ButtonLink>
    </div>
  </section>
  ;


export default ForTeams;
