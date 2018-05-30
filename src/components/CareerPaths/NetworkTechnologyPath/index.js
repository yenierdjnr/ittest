import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { CareerPathCourses } from 'Elements/Flags';
import { IconArrowRight } from 'Elements/Icons';
import TextLinkExternal from 'Elements/TextLinkExternal';
import styles from './styles.module.scss';

const NetworkTechnologyPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (

  <main className={ styles.Paths }>

    <section className={ styles.Hero }>
      <div className={ styles['intro'] }>
        <Link to="/career-resources/career-paths/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Career Paths
        </Link>
        <Hx size="1" className={ styles['title'] }>Network Technology</Hx>
        <Para className={ styles['subtitle'] }>Explore the vendors and paths that you can choose from as a network pro.</Para>
      </div>
    </section>

    <section className={ styles.RecommendedCourses }>
      <div className ={ styles.label }>
        <Hx color={ styles.headingColor } size="5">Recommended Training for Certification</Hx>
      </div>
      <ul className={ styles.list }>
        {recommendedCourses.map(course => (
          <CareerPathCourses
            key={ course.id }
            url={ course.url }
            title={ course.name }
            description={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>

    <section className={ styles.AdditionalCourses }>

      <div className ={ styles.label }>
        <Hx color={ styles.headingColor } size="5">Additional Training</Hx>
      </div>
      <ul className={ styles.list }>
        {additionalCourses.map(course => (
          <CareerPathCourses
            key={ course.id }
            title={ course.name }
            description={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>

    <section className={ styles.Resources }>
      <div className ={ styles.label }>
        <Hx color={ styles.headingColor } size="5">Informational Resources</Hx>
      </div>
      <div className={ styles.article }>
        <div>
          <Hx color={ styles.headingColor } size="6">CompTIA - Network &amp; Cloud Technologies</Hx>
          <Para color={ styles.darkGrey } className={ styles.summary }>Getting an IT certification can help you get started and get ahead in your career. The CompTIA IT Certification Roadmap can make navigating the world of certifications a little easier.</Para>
          <TextLinkExternal to="https://certification.comptia.org/why-certify/roadmap/network-and-cloud-technologies">Read more</TextLinkExternal>
        </div>
      </div>
    </section>

  </main>
);

export default NetworkTechnologyPath;