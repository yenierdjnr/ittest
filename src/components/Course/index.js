import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CoursePageHero as Hero } from 'Components/Hero';
import { CourseTopic } from 'Elements/Flags';
import { CourseExtras } from 'Elements/Flags';
import Para from 'Elements/Para';
import Hx from 'Elements/Hx';
import styles from './styles.module.scss';

const CoursePage = ({ data, ...rest }) => (
  <main className={ styles.coursePage }>

    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
      <title>{ data.course.name }</title>
      <meta name="description" content={ data.course.descriptionMD } />
    </Helmet>


    <section className={ styles.Hero }>
      <Hero tagUrl={ data.course.tagUrl } title={ data.course.name } subtitle={ data.course.subtitle } length={ data.course.length } />
    </section>

    <section className={ styles.container }>
      <div className={ styles.sidebar }></div>
      <div className={ styles.details }>
        <div className={ styles.courseDetails }>
          <CourseExtras vLab={ data.course.vLab } exam={ data.course.practiceExam } className={ styles.extras } />
          <div className={ styles.episode }>
            <Hx className={ styles.title } size="5" color={ styles.offBlack }>Episodes</Hx>
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
        </div>
        <div className={ styles.episodeDetails }>
          <Para color={ styles.greyDark }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Para>
        </div>
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
