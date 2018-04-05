import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { ThankYou as Hero } from 'Components/Hero';
import { ThankYouDemoContent as ThankYouContent } from 'Components/ThankYou';
import styles from './thankyouDemo.module.scss';


const ThankYouDemo = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.thankyouDemo }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.ThankYouContent }>
          <ThankYouContent />
        </section>

      </main>
    </Fragment>
  );
}


export default ThankYouDemo;
