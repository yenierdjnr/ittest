import React from 'react';

import styles from './forTeams.module.scss';
import { ForTeamsHero as Hero } from 'Components/Hero';
import { ForTeamsSummary as Summary } from 'Components/Summary';
import RequestForm from 'Components/RequestForm';
import { ForTeamsVideo as TrackResults } from 'Components/Videos';
import TeamNeeds from 'Components/TeamNeeds';
import Enhancements from 'Components/Enhancements';
import TeamCerts from 'Components/TeamCerts';
import { ForTeamsTestimonials as Testimonials } from 'Components/Testimonials';


const ForTeams = props => {
  return (
    <main className={ styles['for-teams'] }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Summary }>
        <Summary />
      </section>

      <section className={ styles['Track-Results'] }>
        <TrackResults />
      </section>

      <section className={ styles['Team-Needs']}>
        <TeamNeeds />
      </section>

{/*}
      <section className={ styles.Enhancements }>
        <Enhancements />
      </section>

      <section className={ styles['Team-Certs'] }>
        <TeamCerts />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>*/}
    </main>
  );
}


export default ForTeams;
