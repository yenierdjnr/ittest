import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CoursePageHero as Hero } from 'Components/Hero'
import { CourseTopic } from 'Elements/Flags'
import { CourseExtras } from 'Elements/Flags'
import styles from './styles.module.scss';

const CoursePage = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
      <title>{ data.course.name }</title>
      <meta name="description" content={ data.course.descriptionMD } />
    </Helmet>


    <section className={ styles.Hero }>
      <Hero tagUrl={ data.course.tagUrl } title={ data.course.name } subtitle={ data.course.subtitle } length={ data.course.length } />
    </section>

    <section className={ styles.pageView }>
      <CourseExtras vLab={ data.course.vLab } exam={ data.course.practiceExam } />
      <div>
        <ul className={ styles.list }>
          {data.course.topics.map(topic => (
            <CourseTopic
              key={ topic.id }
              title={ topic.title }
              episodes={ topic.episodes }
            />
          ))}
        </ul>
      </div>
      <div className={ styles.episodeDetails }>
      </div>
    </section>

  </main>
);

export default CoursePage;

export const pageQuery = graphql`
  query CourseByPath($courseUrl: String) {
    course: coursesJson(url: {eq: $courseUrl}) {
      id
      name
      subtitle
      description
      descriptionMD
      length
      tagUrl
      vLab
      practiceExam
      topics {
        id
        title
        episodes {
          id
          title
        }
      }
    }
  }
`;
