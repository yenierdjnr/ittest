import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { PageNotFoundHero as Hero } from 'Components/Hero';
import PageNotFoundContent from 'Components/PageNotFoundContent';
import styles from './404.module.scss';


const PageNotFound = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles['page-not-found'] }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.PageNotFoundContent }>
        <PageNotFoundContent />
      </section>

    </main>
  </Layout>



export default PageNotFound;
