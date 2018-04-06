import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { About as Hero } from 'Components/Hero';
import AboutContent from 'Components/AboutContent';
import styles from './about.module.scss';


const About = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.AboutContent }>
          <AboutContent />
        </section>

      </main>
    </Fragment>
  );
}


export default About;
