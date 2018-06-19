import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Edutainers as Hero } from 'Components/Hero';
import EdutainersContent from 'Components/EdutainersContent';
import styles from './edutainers.module.scss';


const Edutainers = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.EdutainersContent }>
          <EdutainersContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Edutainers;
