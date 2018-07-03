import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { About as Hero } from 'Components/Hero';
import AboutContent from 'Components/AboutContent';
import AboutStory from 'Components/AboutStory';
import TrustedBy from 'Components/TrustedBy';
import Values from 'Components/Values';
import styles from './about.module.scss';


const About = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
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

      </main>
    </Fragment>
  );
}


export default About;
