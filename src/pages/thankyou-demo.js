import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { ThankYou as Hero } from 'Components/Hero';
import ThankYou from 'Components/ThankYou';
import styles from './thankyouDemo.module.scss';


const ThankYouDemo = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.thankyouDemo }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.ThankYou }>
        <ThankYou />
      </section>

    </main>
  </Layout>



export default ThankYouDemo;
