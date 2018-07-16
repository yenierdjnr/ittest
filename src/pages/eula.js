import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { Eula as Hero } from 'Components/Hero';
import EulaContent from 'Components/EulaContent';
import styles from './eula.module.scss';


const Eula = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.eula }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.EulaContent }>
        <EulaContent />
      </section>

    </main>
  </Layout>



export default Eula;
