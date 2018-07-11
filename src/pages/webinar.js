import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { WebinarHero as Hero } from 'Components/Hero';
import WebinarContent from 'Components/WebinarContent';
import styles from './webinar.module.scss';


const Webinar = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>
      <main className={ styles.webinar }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.WebinarContent }>
          <WebinarContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Webinar;
