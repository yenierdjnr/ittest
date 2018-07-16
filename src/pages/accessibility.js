import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { Accessibility as Hero } from 'Components/Hero';
import AccessibilityContent from 'Components/AccessibilityContent';
import styles from './accessibility.module.scss';


const Accessibility = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.accessibility }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.AccessibilityContent }>
        <AccessibilityContent />
      </section>

    </main>
  </Layout>



export default Accessibility;
