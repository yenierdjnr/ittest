import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CoursePageHero as Hero } from 'Components/Hero';
import { CourseTopic } from 'Elements/Flags';
import { CourseExtras } from 'Elements/Flags';
import { CourseVideo } from 'Components/Videos';
import EpisodeDetails from 'Components/EpisodeDetails';
import Para from 'Elements/Para';
import Hx from 'Elements/Hx';
import styles from './styles.module.scss';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicIndex: 0,
      episodeIndex: 0
    };
  }

  handleEpisodeChange = (topicIndex, episodeIndex) => {
    this.setState({
      topicIndex, episodeIndex
    })
  }

  render() {
    const { data, ...rest } = this.props;
    const { topicIndex, episodeIndex } = this.state;
    return (
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
                  {data.course.topics.map((topic, index) => (
                    <CourseTopic
                      key={ topic.id }
                      title={ topic.title }
                      episodes={ topic.episodes }
                      onEpisodeChange={ this.handleEpisodeChange }
                      topicIndex={ index }
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className={ styles.episodeView }>
              <EpisodeDetails
                title={ data.course.topics[topicIndex].episodes[episodeIndex].title }
                length={ data.course.topics[topicIndex].episodes[episodeIndex].length }
                description={ data.course.topics[topicIndex].episodes[episodeIndex].description }
              />
              <CourseVideo
                vimeoId={ data.course.topics[topicIndex].episodes[episodeIndex].vimeoId }
                thumbnail={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnail }
                thumbnailMed={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnailMed }
                thumbnailSm={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnailSm }
              />
            </div>
          </div>
        </section>

      </main>
    );
  }
}

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
          description
          length
          thumbnail
          thumbnailSm
          thumbnailMed
          vimeoId
        }
      }
    }
  }
`;
