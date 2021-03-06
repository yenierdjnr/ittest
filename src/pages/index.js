import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

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

const HomePage = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.home }>

      <div className={ styles.kaka }>
        <div className={ styles.Hero }>
          <Hero />
        </div>
      </div>

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
  </Layout>


export default HomePage;


export const query = graphql`
  query HomeVideoImage {
    videoImg: imageSharp(fluid: {originalName: { regex: "/article@1x/"}}) {
      fixed(width: 260, height: 195) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
