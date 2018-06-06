import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const CourseTopic = ({ className= '', title='Topic Title', episodes=[] }) => {
  return (
    <li className={ `${styles.title} ${className} ${styles.container}` }>
      { title }
      <ul className={ styles.episodes }>
      { episodes.map(episode => {
        return(
          <li key={ episode.id } className={ styles.episode } >
          { episode.title }
          </li>
        )
      }) }
      </ul>
    </li>
  );
};


export default CourseTopic;
