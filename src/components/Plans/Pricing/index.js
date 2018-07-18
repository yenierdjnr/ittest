import React from 'react';

import { Enterprise, Free, Premium, Standard } from 'Components/CardPlan';
import styles from './styles.module.scss';


const Pricing = (props) => {
  const { info:currentPricing } = props;

  return (
    <div className={ styles.capsule }>
      <Enterprise className={ styles.pricing } />
      <Premium className={ styles.pricing } info={ currentPricing } />
      <Standard className={ styles.pricing } info={ currentPricing } />
      <Free className={ styles.pricing } info={ currentPricing } />
    </div>
  );
};


export default Pricing;
