import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { PodcastHero as Hero } from 'Components/Hero';
import PodcastContent from 'Components/PodcastContent';
import styles from './podcasts.module.scss';


const Podcasts = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>
      <main className={ styles.podcasts }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.PodcastContent }>
          <PodcastContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Podcasts;
