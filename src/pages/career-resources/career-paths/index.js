import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { CareerPathsHero as Hero } from 'Components/Hero';
import { CareerPathsMain as Paths } from 'Components/CareerPaths';
import styles from './careerPaths.module.scss';

const CareerPathsPage = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.CareerPaths }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.Paths }>
          <Paths />
        </section>

      </main>
    </Fragment>
  );
}

export default CareerPathsPage;
