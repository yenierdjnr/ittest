import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { CareerPathsHero as Hero } from 'Components/Hero';
import { CareerPathsMain as Paths } from 'Components/CareerPaths';
import styles from './careerPaths.module.scss';

const CareerPathsPage = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.CareerPaths }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Paths }>
        <Paths />
      </section>

    </main>
  </Layout>


export default CareerPathsPage;
