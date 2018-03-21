import React from 'react';

import styles from './forYou.module.scss';
import { ForYouHero as Hero } from 'Components/Hero';
import { ForYouSummary as Summary } from 'Components/Summary';
import { ForYouVideo as LearnMore } from 'Components/Videos';
import { ForTeams, VendorList } from 'Components/Shoutout'
import Enhancements from 'Components/Enhancements';
import { ForTeamsTestimonials as Testimonials } from 'Components/Testimonials';
import { ForYou as Plan } from 'Components/Plans';


const ForYou = props => {
  return (
    <main className={ styles['for-you'] }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Summary }>
        <Summary />
      </section>

      <section className={ styles['Learn-More'] }>
        <LearnMore />
      </section>

      <section className={ styles.Vendors }>
        <VendorList />
      </section>

      <section className={ styles.Enhancements }>
        <Enhancements />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>

      <section className={ styles.Plan }>
        <Plan />
      </section>

      <section className={ styles['For-Teams'] }>
        <ForTeams />
      </section>
    </main>
  );
}


export default ForYou;
