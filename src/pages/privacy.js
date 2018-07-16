import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { PrivacyPolicy as Hero } from 'Components/Hero';
import PrivacyContent from 'Components/PrivacyContent';
import styles from './privacy.module.scss';


const Privacy = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.privacy }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.PrivacyContent }>
        <PrivacyContent />
      </section>

    </main>
  </Layout>



export default Privacy;
