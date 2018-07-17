import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { ITResourcesHero as Hero } from 'Components/Hero';
import styles from './itResources.module.scss';

const JobResources = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>

      </section>

    </main>
  </Layout>


export default JobResources;
