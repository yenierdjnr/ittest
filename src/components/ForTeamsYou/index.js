import React from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const ForTeamsYou = props => {
  return (
    <section className={ styles.container }>
      <a href="/for-teams/" className={ styles['card-left'] }>
        <div className={ styles.card }>
          <div className={ styles.body }>
            <span className={ styles.title }>For Teams</span>
            <IconArrowRight fill={ styles.greenDark } />
            <h2 className={ styles.subtitle }>Learning Your Team Will Actually Use</h2>
            <p className={ styles.summary } >Empower your team with the IT skills<br/>they need.</p>
          </div>
          <div className={ styles['bottom-bar'] }></div>
        </div>
      </a>

      <a href="/for-you/" className={ styles['card-right'] }>
        <div className={ styles.card }>
          <div className={ styles.body }>
            <span className={ styles.title }>For You</span>
            <IconArrowRight fill={ styles.blueDark } />
            <h2 className={ styles.subtitle }>Training to Accelerate Your Career</h2>
            <p className={ styles.summary }>Get the skills you need from an expansive course library.</p>
          </div>
          <div className={ styles['bottom-bar'] }></div>
        </div>
      </a>
    </section>
  );
};


export default ForTeamsYou;
