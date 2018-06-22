import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import BenefitList from './BenefitList';


const Benefits = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.content }>
        <Hx className={ styles.title } color={ styles.offBlack } size="4">ITProTV Membership Benefits</Hx>
        <div className={ styles.plans }>
          <div className={ styles.premium }>
            <TextLink color={ styles.purple } hideArrow='true' disabled>premium</TextLink>
            <div className={ styles.pricing }>
              <span className={ styles.price }>$857/year or </span>
              <span className={ styles.price }>$85.70/month</span>
            </div>
          </div>
          <div className={ styles.standard }>
            <TextLink color={ styles.darkBlue } hideArrow='true' disabled>standard</TextLink>
            <div className={ styles.pricing }>
              <span className={ styles.price }>$570/year or </span>
              <span className={ styles.price }>$57/month</span>
            </div>
          </div>
          <div className={ styles.free }>
            <TextLink color={ styles.darkGreen } hideArrow='true' disabled>free</TextLink>
            <div className={ styles.pricing }>
              <span className={ styles.price }>$0</span>
            </div>
          </div>
        </div>

        <div className={ styles.benefits }>
          <BenefitList />
        </div>
      </div>
    </section>
  );
};


export default Benefits;
