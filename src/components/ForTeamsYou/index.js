import React from 'react';

import styles from './styles.module.scss';
import Card from 'Components/Card';
import { IconArrowRight } from 'Elements/Icons';


const blueDark = '#0094CB';
const greenDark = '#469E24';
const orangePrimary = '#F6621C';

const ForTeamsYou = props => {
  return (
    <section className={ styles.container }>
      <a href="/for-teams/" className={ styles['card-left'] }>
        <Card className={ styles['card'] } btmBarColor={ greenDark }>
          <span className={ styles['for-teams'] }>For Teams</span>
          <IconArrowRight fill={ greenDark } />
          <h2 className={ styles['head-one'] }>Learning Your Team Will Actually Use</h2>
          <p>Empower your team with the IT skills<br/>they need.</p>
        </Card>
      </a>
      <a href="/for-you/" className={ styles['card-right'] }>
        <Card className={ styles['card'] } btmBarColor={ blueDark }>
          <span className={ styles['for-you'] }>For You</span>
          <IconArrowRight fill={ blueDark } />
          <h2 className={ styles['head-one'] }>Training to Accelerate Your Career</h2>
          <p>Get the skills you need from an expansive course library.</p>
        </Card>
      </a>
    </section>
  );
};


export default ForTeamsYou;
