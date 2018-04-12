import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { EntryLevelITHero as Hero } from 'Components/Hero';
import { EntryLevelIT as Courses } from 'Components/CareerPathCourses';
import styles from '../../careerResources.module.scss';

const EntryLevelIT = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.Courses }>
          <Courses />
        </section>

      </main>
    </Fragment>
  );
}

export default EntryLevelIT;
