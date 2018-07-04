import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { CareerPathCourses } from 'Elements/Flags';
import { IconArrowRight } from 'Elements/Icons';
import TextLinkExternal from 'Elements/TextLinkExternal';
import styles from './styles.module.scss';

const DatabaseAdministrationPath = ({ data, recommendedCourses, additionalCourses, ...rest }) =>

  <main className={ styles.Path }>

    <section className={ styles.Hero}>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles['intro'] }>
            <Link to="/career-resources/career-paths/" className={ styles.navigation }>
              <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
              Career Paths
            </Link>
            <Hx size="1" className={ styles['title'] }>Database Administration</Hx>
            <Para className={ styles['subtitle'] }>DBAs are in high-demand. Get the foundation for any database admin career with this path.</Para>
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

      <section className={ styles.Resources }>
        <div className={ `${styles.label} ${styles.colXS12}` }>
          <Hx color={ styles.headingColor } size="5">Informational Resources</Hx>
        </div>
        <div className={ styles.article }>
          <Hx color={ styles.headingColor } size="6">CompTIA - Storage &amp; Data</Hx>
          <Para color={ styles.darkGrey } className={ styles.summary }>Getting an IT certification can help you get started and get ahead in your career. The CompTIA IT Certification Roadmap can make navigating the world of certifications a little easier.</Para>
          <TextLinkExternal to="https://certification.comptia.org/why-certify/roadmap/storage-and-data">Read more</TextLinkExternal>
        </div>
      </section>

    </section>

  </main>
;

export default DatabaseAdministrationPath;
