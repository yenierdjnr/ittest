import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { CareerPathCourses } from 'Elements/Flags';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';

const SystemsAdministrationPath = ({ data, recommendedCourses, additionalCourses, ...rest }) =>

  <main className={ styles.Path }>

    <section className={ styles.Hero }>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles['intro'] }>
            <Link to="/career-resources/career-paths/" className={ styles.navigation }>
              <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
              Career Paths
            </Link>
            <Hx size="1" className={ styles['title'] }>Systems Administration</Hx>
            <Para className={ styles['subtitle'] }>Get started or advance as a system admin with these key courses that lead to certs.</Para>
          </div>
        </div>
      </div>
    </section>

    <section className={ styles.container }>

      <section className={ styles.RecommendedCourses }>
        <div className={ styles.colXS12 }>
          <div className ={ styles.label }>
            <Hx color={ styles.headingColor } size="5">Recommended Training for Certification</Hx>
          </div>
          <ul className={ styles.list }>
            {recommendedCourses.map((course) =>
              <CareerPathCourses
                key={ course.url }
                url={ `/courses/${course.tagUrl}/${course.url}/` }
                title={ course.name }
                description={ course.subtitle }
                level={ course.level }
              />
            )}
          </ul>
        </div>
      </section>

      <section className={ styles.AdditionalCourses }>
        <div className={ styles.colXS12 }>
          <div className ={ styles.label }>
            <Hx color={ styles.headingColor } size="5">Additional Training</Hx>
          </div>
          <ul className={ styles.list }>
            {additionalCourses.map((course) =>
              <CareerPathCourses
                key={ course.url }
                url={ `/courses/${course.tagUrl}/${course.url}/` }
                title={ course.name }
                description={ course.subtitle }
                level={ course.level }
              />
            )}
          </ul>
        </div>
      </section>

    </section>

  </main>
;

export default SystemsAdministrationPath;
