import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const CourseTopic = ({ className='', title='Topic Title', episodes=[] }) => {
  return (
    <li className={ `${className} ${styles.container}` }>
      { title }
      <ul>
      { episodes.map(episode => {
        return(
          <li key={ episode.id } >
          { episode.title }
          </li>
        )
      }) }
      </ul>
    </li>
  );
};


export default CourseTopic;
