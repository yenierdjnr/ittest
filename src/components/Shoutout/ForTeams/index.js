import React from 'react';

import Hx from 'Elements/Hx';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';

const ForTeams = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.text }>
          <Hx className={ styles.title } color={ styles.offBlack }size="2">Training a whole team?<br/>Ask about corporate membership.</Hx>
        </div>
        <div className={ styles.btn }>
          <ButtonLink to="/for-teams/" className={ styles.button }>training for teams</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
