import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { SystemAdministrationHero as Hero } from 'Components/Hero';
import styles from '../../careerResources.module.scss';

const SystemsAdministration = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

      </main>
    </Fragment>
  );
}

export default SystemsAdministration;
