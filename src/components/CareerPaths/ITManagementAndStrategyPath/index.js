import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { CareerPathCourses } from 'Elements/Flags';
import { IconArrowRight } from 'Elements/Icons';
import TextLinkExternal from 'Elements/TextLinkExternal';
import styles from './styles.module.scss';

const ITManagementAndStrategyPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (

  <main className={ styles.Paths }>

    <section className={ styles.Hero }>
      <div className={ styles['intro'] }>
        <Link to="/career-resources/career-paths/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Career Paths
        </Link>
        <Hx size="1" className={ styles['title'] }>IT Management and Strategy</Hx>
        <Para className={ styles['subtitle'] }>Explore the specialized training for project management in IT that's in high demand.</Para>
      </div>
    </section>

    <section className={ styles.RecommendedCourses }>
      <div className ={ styles.label }>
        <Hx color={ styles.headingColor } size="5">Recommended Training for Certification</Hx>
      </div>
      <ul className={ styles.list }>
        {recommendedCourses.map(course => (
          <CareerPathCourses
            key={ course.url }
            url={ `/courses/${course.tagUrl}/${course.url}/` }
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
            key={ course.url }
            url={ `/courses/${course.tagUrl}/${course.url}/` }
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
          <Hx color={ styles.headingColor } size="6">CompTIA - IT Management &amp; Strategy</Hx>
          <Para color={ styles.darkGrey } className={ styles.summary }>Getting an IT certification can help you get started and get ahead in your career. The CompTIA IT Certification Roadmap can make navigating the world of certifications a little easier.</Para>
          <TextLinkExternal to="https://certification.comptia.org/why-certify/roadmap/it-management-and-strategy">Read more</TextLinkExternal>
        </div>
        <div>
          <Hx color={ styles.headingColor } size="6">Become an ITIL Master of all Disciplines</Hx>
          <Para color={ styles.darkGrey } className={ styles.summary }>Based on a series of qualifications covering the different areas of ITIL Service Management, ITIL practitioners can earn certifications in a specific discipline or train all the way to becoming an ITIL Master of all disciplines.</Para>
          <TextLinkExternal to="https://go.itpro.tv/itil-training">Read more</TextLinkExternal>
        </div>
      </div>
    </section>

  </main>
);

export default ITManagementAndStrategyPath;
