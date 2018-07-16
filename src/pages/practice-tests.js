import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { PracticeTests as Hero } from 'Components/Hero';
import TestContent from 'Components/TestContent';
import styles from './practice-tests.module.scss';


const PracticeTests = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles['practice-tests'] }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.TestContent }>
        <TestContent />
      </section>

    </main>
  </Layout>



export default PracticeTests;
