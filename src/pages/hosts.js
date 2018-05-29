import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Hosts as Hero } from 'Components/Hero';
import HostsContent from 'Components/HostsContent';
import styles from './hosts.module.scss';


const Hosts = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.HostsContent }>
          <HostsContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Hosts;
