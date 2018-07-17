import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { WebinarHero as Hero } from 'Components/Hero';
import WebinarContent from 'Components/WebinarContent';
import styles from './webinars.module.scss';


const Webinars = ({ location }) => {
  return (
    <Layout location={ location }>
      <Head location={ location }/>
      <main className={ styles.webinars }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.WebinarContent }>
          <WebinarContent />
        </section>

      </main>
    </Layout>
  );
}


export default Webinars;
