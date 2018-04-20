import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { GettingCertifiedHero as Hero } from 'Components/Hero';
import styles from './gettingCertified.module.scss';

const gettingCertified = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
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

export default gettingCertified;
