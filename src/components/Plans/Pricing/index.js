import React from 'react';
import styles from './styles.module.scss';

import { Enterprise, Free, Premium, Standard } from 'Components/CardPlan';


const Pricing = props => {
  const { info:currentPricing } = props;

  return (
    <section className={ styles.container }>
      <Enterprise className="pricing" />
      <Premium className="pricing" info={ currentPricing.premium } />
      <Standard className="pricing" info={ currentPricing.standard } />
      <Free className="pricing" info={ currentPricing.free } />
    </section>
  );
};


export default Pricing;
