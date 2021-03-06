import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { ForYouHero as Hero } from 'Components/Hero';
import { ForYouSummary as Summary } from 'Components/Summary';
import { ForYouVideo as LearnMore } from 'Components/Videos';
import { ForTeams, VendorList } from 'Components/Shoutout'
import Enhancements from 'Components/Enhancements';
import { ForYouTestimonials as Testimonials } from 'Components/Testimonials';
import { ForYou as Plan } from 'Components/Plans';
import styles from './forYou.module.scss';


const ForYou = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location }/>
    <main className={ styles.forYou }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Summary }>
        <Summary />
      </section>

      <section className={ styles.LearnMore }>
        <LearnMore videoImg={ data.videoImg }/>
      </section>

      <section className={ styles.Vendors }>
        <VendorList />
      </section>

      <section className={ styles.Enhancements }>
        <Enhancements />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>

      <section className={ styles.Plan }>
        <Plan />
      </section>

      <section className={ styles.ForTeams }>
        <ForTeams />
      </section>
    </main>
  </Layout>



export default ForYou;


export const query = graphql`
  query ForYou {
    videoImg: imageSharp(fluid: {originalName: { regex: "/forYou_video@1x/"}}) {
      fluid(maxWidth: 1050) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
