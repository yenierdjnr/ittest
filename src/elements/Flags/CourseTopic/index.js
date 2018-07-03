import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const CourseTopic = ({ className='', title='Topic Title', episodes=[], topicIndex, onEpisodeChange }) => 
  <li className={ `${styles.title} ${className} ${styles.container}` }>
    { title }
    <ul className={ styles.episodes }>
      { episodes.map((episode, episodeIndex) => 
        <li key={ episode.id } className={ styles.episode } onClick={ () => onEpisodeChange(topicIndex, episodeIndex) } >
          { episode.title }
        </li>
      ) }
    </ul>
  </li>
  ;


export default CourseTopic;
