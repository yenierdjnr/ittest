import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { PodcastHero as Hero } from 'Components/Hero';
import PodcastContent from 'Components/PodcastContent';
import styles from './podcasts.module.scss';


const Podcasts = ({ location }) => {
  return (
    <Layout location={ location }>
      <Head location={ location }/>
      <main className={ styles.podcasts }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.PodcastContent }>
          <PodcastContent />
        </section>

      </main>
    </Layout>
  );
}


export default Podcasts;
