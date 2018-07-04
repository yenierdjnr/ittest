import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Eula as Hero } from 'Components/Hero';
import EulaContent from 'Components/EulaContent';
import styles from './eula.module.scss';


const Eula = ({ data, history, location }) =>
  <Fragment>
    <Head location={ location } />
    <main className={ styles.eula }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.EulaContent }>
        <EulaContent />
      </section>

    </main>
  </Fragment>



export default Eula;
