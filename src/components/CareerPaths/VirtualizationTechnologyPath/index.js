import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { CareerPathCourses } from 'Elements/Flags';
import { IconArrowRight } from 'Elements/Icons';
import TextLinkExternal from 'Elements/TextLinkExternal';
import styles from './styles.module.scss';

const VirtualizationTechnologyPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (

  <main className={ styles.Paths }>

    <section className={ styles.Hero }>
      <div className={ styles['intro'] }>
        <Link to="/career-resources/career-paths/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Career Paths
        </Link>
        <Hx size="1" className={ styles['title'] }>Virtualization Technology</Hx>
        <Para className={ styles['subtitle'] }>Whether a dev, admin, or engineer, you'll be an asset to any organization with virtualization skills.</Para>
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

  </main>
);

export default VirtualizationTechnologyPath;
