import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { ThankYou as Hero } from 'Components/Hero';
import ThankYou from 'Components/ThankYou';
import styles from './thankyouDemo.module.scss';


const ThankYouDemo = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
  <Fragment>
    <Head location={ location }/>
    <main className={ styles.thankyouDemo }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.ThankYou }>
        <ThankYou />
      </section>

    </main>
  </Fragment>
  


export default ThankYouDemo;
