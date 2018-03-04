import React, { Fragment } from 'react';

import styles from './homePage.module.scss';
import Hero from 'Components/Hero';
import ForTeamsYou from 'Components/ForTeamsYou';
import Engagements from 'Components/Engagements';
import Stats from 'Components/Stats';
import { HomeVideo } from 'Components/Videos';
import Testimonials from 'Components/Testimonials';
import VendorList from 'Components/Vendors/List';
import Plans from 'Components/Plans';
import Pamphlet from 'Components/Pamphlet';


const HomePage = props => {
  return (
    <main className={ styles.home }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.For }>
        <ForTeamsYou />
      </section>

      <section className={ styles.Engagements }>
        <Engagements />
      </section>

      <section className={ styles.Stats }>
        <Stats />
      </section>

      <section className={ styles.Video }>
        <HomeVideo />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>

      <section className={ styles.Vendors }>
        <VendorList />
      </section>

      <section className={ styles.Plans }>
        <Plans />
      </section>

      <section className={ styles.Pamphlet }>
        <Pamphlet />
      </section>
    </main>
  );
}


export default HomePage;
