import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { PracticeTests as Hero } from 'Components/Hero';
import TestContent from 'Components/TestContent';
import styles from './practice-tests.module.scss';


const PracticeTests = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
  <Fragment>
    <Head location={ location }/>
    <main className={ styles['practice-tests'] }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.TestContent }>
        <TestContent />
      </section>

    </main>
  </Fragment>
  


export default PracticeTests;
