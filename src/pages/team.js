import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Team as Hero } from 'Components/Hero';
import TeamContent from 'Components/TeamContent';
import styles from './team.module.scss';


const Team = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>,
      <main className={ styles.about }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.TeamContent }>
          <TeamContent />
        </section>

      </main>
    </Fragment>
  );
}


export default Team;
