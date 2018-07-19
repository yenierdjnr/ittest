import React from 'react';

import styles from './styles.module.scss';


const CourseTopic = ({ className='', title='Topic Title', episodes=[], topicIndex, onEpisodeChange }) =>
  <li className={ `${styles.title} ${className} ${styles.container}` }>
    { title }
    <ul className={ styles.episodes }>
      { episodes.map((episode, episodeIndex) =>
        <li key={ episode.title } className={ styles.episode } onClick={ () => onEpisodeChange(topicIndex, episodeIndex) } >
          { episode.title }
        </li>
      ) }
    </ul>
  </li>
  ;


export default CourseTopic;
