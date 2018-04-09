import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { CareerPathsHero as Hero } from 'Components/Hero';
import styles from './careerPaths.module.scss';

const CareerPaths = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.CareerPaths }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

      </main>
    </Fragment>
  );
}

export default CareerPaths;
