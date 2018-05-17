import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { VirtualLabsHero as Hero } from 'Components/Hero';
import styles from './courses.module.scss';


const VirtualLabs = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.courses }>
        <section className={ styles.Hero }>
          <Hero />
        </section>


      </main>
    </Fragment>
  );
}


export default VirtualLabs;
