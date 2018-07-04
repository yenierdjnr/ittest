import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { HomeHero as Hero } from 'Components/Hero';
import ForTeamsYou from 'Components/ForTeamsYou';
import Engagements from 'Components/Engagements';
import Stats from 'Components/Stats';
import { HomeVideo } from 'Components/Videos';
import { HomeTestimonials as Testimonials } from 'Components/Testimonials';
import { VendorList } from 'Components/Shoutout';
import { Home as Plans } from 'Components/Plans';
import Pamphlet from 'Components/Pamphlet';
import styles from './homePage.module.scss';

const HomePage = ({ data, history, location }) =>
  <Fragment>
    <Head location={ location }/>
    <main className={ styles.home }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.For }>
        <ForTeamsYou />
      </section>

      <section className={ styles.Engagements }>
        <Engagements />
      </section>

      <section className={ styles.Stats }>
        <Stats />
      </section>

      <section className={ styles.Video }>
        <HomeVideo />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>

      <section className={ styles.Vendors }>
        <VendorList />
      </section>

      <section className={ styles.Plans }>
        <Plans />
      </section>

      <section className={ styles.Pamphlet }>
        <Pamphlet videoImg={ data.videoImg }/>
      </section>
    </main>
  </Fragment>



export default HomePage;


export const query = graphql`
  query HomeVideoImage {
    videoImg: imageSharp(id: { regex: "/article@1x/"}) {
      resolutions(width: 260, height: 195) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
