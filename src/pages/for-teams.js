import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { ForTeamsHero as Hero } from 'Components/Hero';
import { ForTeamsSummary as Summary } from 'Components/Summary';
import { ForTeamsVideo as TrackResults } from 'Components/Videos';
import TeamNeeds from 'Components/TeamNeeds';
import Enhancements from 'Components/Enhancements';
import TeamCerts from 'Components/TeamCerts';
import { ForTeamsTestimonials as Testimonials } from 'Components/Testimonials';
import styles from './forTeams.module.scss';


const ForTeams = ({ data, history, location }) =>
  <Fragment>
    <Head location={ location }/>
    <main className={ styles['for-teams'] }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Summary }>
        <Summary />
      </section>

      <section className={ styles['Track-Results'] }>
        <TrackResults videoImage={ data.videoImage }/>
      </section>

      <section className={ styles['Team-Needs']}>
        <TeamNeeds />
      </section>

      <section className={ styles.Enhancements }>
        <Enhancements />
      </section>

      <section className={ styles['Team-Certs'] }>
        <TeamCerts testimonials={ data.testimonials }/>
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>
    </main>
  </Fragment>



export default ForTeams;


export const query = graphql`
  query ForTeamVideoAndTestimonialTeamCerts {
    videoImage: imageSharp(id: { regex: "/forTeams_video@1x/"}) {
      sizes(maxWidth: 669) {
        ...GatsbyImageSharpSizes
      }
    },
    testimonials: imageSharp(id: { regex: "/testimonial_video@1x/"}) {
      sizes(maxWidth: 669) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
