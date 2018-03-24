import React from 'react';

import { Enterprise, Free, Premium, Standard } from 'Components/CardPlan';
import styles from './styles.module.scss';


const Pricing = props => {
  const { info:currentPricing } = props;

  return (
    <div className={ styles.container }>
      <Enterprise className="pricing" />
      <Premium className="pricing" info={ currentPricing.premium } />
      <Standard className="pricing" info={ currentPricing.standard } />
      <Free className="pricing" info={ currentPricing.free } />
    </div>
  );
};


export default Pricing;
