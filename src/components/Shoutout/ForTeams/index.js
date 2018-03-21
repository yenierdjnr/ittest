import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import ButtonLink from 'Elements/ButtonLink';


const ForTeams = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <Hx className={ styles.title } color={ styles.offBlack }size="2">Training a whole team? <br/>Ask about corporate membership.</Hx>
        <ButtonLink to="/for-teams/" className={ styles['button'] }>training for teams</ButtonLink>
      </div>
    </section>
  );
};


export default ForTeams;
