import React from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { Team as Hero } from 'Components/Hero';
import TeamContent from 'Components/TeamContent';
import styles from './team.module.scss';


const Team = ({ location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.team }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.TeamContent }>
        <TeamContent />
      </section>

    </main>
  </Layout>



export default Team;
