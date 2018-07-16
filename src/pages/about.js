import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { About as Hero } from 'Components/Hero';
import AboutContent from 'Components/AboutContent';
import AboutStory from 'Components/AboutStory';
import TrustedBy from 'Components/TrustedBy';
import Values from 'Components/Values';
import Charity from 'Components/Charity';
import styles from './about.module.scss';


const About = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Layout location={ location }>
      <Head location={ location }/>
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.AboutContent }>
          <AboutContent />
        </section>

        <section className={ styles.AboutStory }>
          <AboutStory />
        </section>

        <section className={ styles.TrustedBy }>
          <TrustedBy />
        </section>

        <section className={ styles.Values }>
          <Values />
        </section>

        <section className={ styles.Charity }>
          <Charity />
        </section>

      </main>
    </Layout>
  );
}


export default About;
