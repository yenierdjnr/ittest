import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CoursePageHero as Hero } from 'Components/Hero';
import { CourseTopic } from 'Elements/Flags';
import { CourseExtras } from 'Elements/Flags';
import { CourseVideo } from 'Components/Videos';
import EpisodeDetails from 'Components/EpisodeDetails';
import EpisodeExtras from 'Components/EpisodeExtras';
import { IconCaret } from 'Elements/Icons';
import Para from 'Elements/Para';
import Hx from 'Elements/Hx';
import styles from './styles.module.scss';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicIndex: 0,
      episodeIndex: 0,
      showOpacity: '',
      showEpisodes: false
    };
  }

  handleEpisodeToggle = () => {
    this.setState({
      showEpisodes: !this.state.showEpisodes
    })
  }

  handleEpisodeChange = (topicIndex, episodeIndex) => {

    const vidWrap = document.getElementById('vidwrap');

    this.setState({
      topicIndex, episodeIndex
    })
    return (
      vidWrap.innerHTML = ``
    )
  }

  render() {
    const { data, ...rest } = this.props;
    const { topicIndex, episodeIndex, episodes } = this.state;
    return (
      <main className={ styles.coursePage }>

        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
          <title>{ data.course.name }</title>
          <meta name="description" content={ data.course.descriptionMD } />
        </Helmet>


        <section className={ styles.Hero }>
          <Hero tagUrl={ data.course.tagUrl } title={ data.course.name } subtitle={ data.course.subtitle } length={ data.course.length } {...this.props} />
        </section>

        <section className={ styles.details }>
          <div className={ styles.row }>
            <div className={ styles.courseDetails }>
              <CourseExtras vLab={ data.course.vLab } exam={ data.course.practiceExam } className={ styles.extras } />
              <div className={ styles.episodes }>
                <div className={ styles.colXS12 }>
                  <Hx className={ `${styles['desktopEpisodes']} ${styles.title}` } size="5" color={ styles.offBlack }>Episodes</Hx>
                  <Hx className={ `${styles['mobileEpisodes']} ${styles.title}` } size="5" color={ styles.offBlack }><span onClick={ () => this.handleEpisodeToggle() }>Episodes <IconCaret className={ this.state.showEpisodes ? styles.caret : '' } /></span></Hx>
                </div>
                <div className={ styles.colXS12 }>
                  <ul className={ `${this.state.showEpisodes ? '' : styles['mobileEpisodeList']} ${styles.list}` }>
                    {data.course.topics.map((topic, index) => (
                      <CourseTopic
                        key={ topic.title }
                        title={ topic.title }
                        episodes={ topic.episodes }
                        onEpisodeChange={ this.handleEpisodeChange }
                        topicIndex={ index }
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={ styles.episodeView }>
              <div className={ styles.row }>
                <EpisodeDetails
                  title={ data.course.topics[topicIndex].episodes[episodeIndex].title }
                  length={ data.course.topics[topicIndex].episodes[episodeIndex].length }
                  description={ data.course.topics[topicIndex].episodes[episodeIndex].description }
                />
                <CourseVideo
                  vimeoId={ data.course.topics[0].episodes[0].vimeoId }
                  thumbnail={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnail }
                  thumbnailMed={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnailMed }
                  thumbnailSm={ data.course.topics[topicIndex].episodes[episodeIndex].thumbnailSm }
                  episode={ data.course.topics[topicIndex].episodes[episodeIndex] }
                  overview={ data.course.topics[0].episodes[0] }
                />
               <EpisodeExtras
                 transcript={ data.course.topics[topicIndex].episodes[episodeIndex].transcript }
                />
              </div>
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
      url
      name
      subtitle
      description
      descriptionMD
      length
      tagUrl
      vLab
      practiceExam
      topics {
        title
        episodes {
          title
          description
          length
          thumbnail
          thumbnailSm
          thumbnailMed
          vimeoId
          transcript
        }
      }
    }
  }
`;
