import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Government as Hero } from 'Components/Hero';
import GovernmentContent from 'Components/GovernmentContent';
import GovIntro from 'Components/GovIntro';
import GovBottomElement from 'Components/GovBottomElement';
import { TeamsVideo as TrackResults } from 'Components/Videos';
import GsaSchedule from 'Components/GsaSchedule';
import GsaCourses from 'Components/GsaCourses';
import styles from './government.module.scss';


const Government = ({ data, location }) =>
  <Fragment>
    <Head location={ location }/>
    <main className={ styles.government }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.GovIntro }>
        <GovIntro />
      </section>

      <section className={ styles.GovernmentContent }>
        <GovernmentContent />
      </section>

      <section className={ styles.GsaCourses }>
        <GsaCourses />
      </section>

      <section className={ styles['Track-Results'] }>
        <TrackResults videoImage={ data.videoImage }/>
      </section>

      <section className={ styles.GsaSchedule }>
        <GsaSchedule />
      </section>

      <section className={ styles.GovBottomElement }>
        <GovBottomElement />
      </section>

    </main>
  </Fragment>



export default Government;

export const query = graphql`
  query TeamVideo {
    videoImage: imageSharp(id: { regex: "/forTeams_video@1x/"}) {
      sizes(maxWidth: 669) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;
