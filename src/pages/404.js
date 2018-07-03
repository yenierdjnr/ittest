import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { PageNotFoundHero as Hero } from 'Components/Hero';
import PageNotFoundContent from 'Components/PageNotFoundContent';
import styles from './404.module.scss';


const PageNotFound = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>
      <main className={ styles['page-not-found'] }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.PageNotFoundContent }>
          <PageNotFoundContent />
        </section>

      </main>
    </Fragment>
  );
}


export default PageNotFound;
