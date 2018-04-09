import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { CareerResourcesHero as Hero } from 'Components/Hero';
import CareerResourcesMenu from 'Components/CareerResourcesMenu';
import CareerCoach from 'Components/CareerCoach';
import styles from './careerResources.module.scss';

const CareerResources = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default CareerResources;
