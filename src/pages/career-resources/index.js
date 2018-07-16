import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { CareerResourcesHero as Hero } from 'Components/Hero';
import CareerResourcesMenu from 'Components/CareerResourcesMenu';
import CareerCoach from 'Components/CareerCoach';
import styles from './careerResources.module.scss';

const CareerResources = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.CareerResourcesMenu }>
        <CareerResourcesMenu />
      </section>

      <section className={ styles.CareerCoach }>
        <CareerCoach />
      </section>

    </main>
  </Layout>


export default CareerResources;
