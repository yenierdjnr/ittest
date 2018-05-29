import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';
import TextLink from 'Elements/TextLink';
import styles from './styles.module.scss';


const CareerCoach = ({ className='' }) => {

  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <div className={ styles.details }>
          <Hx className={ styles.title } color={ styles.offBlack }size="2">Career Coach Services</Hx>
          <Para className={ styles.summary } color={ styles.darkGrey } size="2">Navigate the IT career roadmap and find the perfect job with a coaching session. Get one-on-one time with an expert at your convenience. This service is exclusively for ITProTV Premium members.</Para>
        </div>
        <div className={ styles.button }>
          <ButtonLink to="/plans/" className={ styles['button'] }>Get Started Today</ButtonLink>
        </div>
        <div className={ styles.premium }>
          <Para className={ styles.summary } color={ styles.darkGrey } size="2">Already a Pemium ITProTV member?</Para>
          <TextLink className={ styles['menu-link'] } to={`${process.env.SELF_URL}/career-resources/appointment-scheduler`}>Schedule a career coaching appointment today</TextLink>
        </div>
      </div>
    </section>
  );
};


export default CareerCoach;
