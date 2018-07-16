import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { Edutainers as Hero } from 'Components/Hero';
import EdutainersContent from 'Components/EdutainersContent';
import styles from './edutainers.module.scss';


const Edutainers = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.edutainers }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.EdutainersContent }>
        <EdutainersContent />
      </section>

    </main>
  </Layout>



export default Edutainers;
