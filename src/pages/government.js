import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Government as Hero } from 'Components/Hero';
import GovernmentContent from 'Components/GovernmentContent';
import GovIntro from 'Components/GovIntro';
import GsaSchedule from 'Components/GsaSchedule';
import styles from './government.module.scss';


const Government = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.GovIntro }>
          <GovIntro />
        </section>

        <section className={ styles.GovernmentContent }>
          <GovernmentContent />
        </section>

        <section className={ styles.GsaSchedule }>
          <GsaSchedule />
        </section>

      </main>
    </Fragment>
  );
}


export default Government;
