import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import ButtonLink from 'Elements/ButtonLink';


const ForTeams = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.title } color={ styles.offBlack }size="2">Training a whole team? <br/>Learn about our corporate rates.</Hx>
      <ButtonLink className={ styles['button'] }>training for teams</ButtonLink>
    </section>
  );
};


export default ForTeams;
