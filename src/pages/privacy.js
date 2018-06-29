import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { PrivacyPolicy as Hero } from 'Components/Hero';
import PrivacyContent from 'Components/PrivacyContent';
import styles from './privacy.module.scss';


const Privacy = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>
      <main className={ styles.privacy }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.PrivacyContent }>
          <PrivacyContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Privacy;
