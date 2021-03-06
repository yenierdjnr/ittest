import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';


const ForTeamsYou = () =>
  <section className={ styles.capsule }>
    <a href="/for-teams/" className={ styles.cardLeft }>
      <div className={ styles.card }>
        <div className={ styles.body }>
          <span className={ styles.title }>For Teams</span>
          <IconArrowRight fill={ styles.greenDark } />
          <Hx size="2" className={ styles.subtitle } color={ styles.offBlack }>Training Your Team Will Actually Use</Hx>
          <Para className={ `${styles.summary} ${styles.forTeams}` } color={ styles.offBlack }>Empower your team with the IT skills they need.</Para>
        </div>
        <div className={ styles.bottomBar }></div>
      </div>
    </a>

    <a href="/for-you/" className={ styles.cardRight }>
      <div className={ styles.card }>
        <div className={ styles.body }>
          <span className={ styles.title }>For You</span>
          <IconArrowRight fill={ styles.blueDark } />
          <Hx size="2" className={ styles.subtitle } color={ styles.offBlack }>Training to Accelerate Your Career</Hx>
          <Para className={ `${styles.summary} ${styles.forYou}` } color={ styles.offBlack }>Get the skills you need from an expansive course library.</Para>
        </div>
        <div className={ styles.bottomBar }></div>
      </div>
    </a>
  </section>
  ;


export default ForTeamsYou;
