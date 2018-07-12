import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Link from 'gatsby-link';

const lengthToString = (length) => {
  length = Number(length);
  const h = Math.floor(length / 3600);
  const m = Math.floor(length % 3600 / 60);

  const hDisplay = h > 0 ? h + (h == 1 ? " H" : " H") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " M" : " M") : "";
  return [hDisplay, mDisplay ];
}

const Course = ({ className='', title='Course Title', description='001-01', courseLength, url }) => {
  return (
    <Link to={ url }
      className={ `${className} ${styles.link}` }>
      <li className={ `${className} ${styles.container}` }>
        <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
        <div className={ styles.course }>
          <span className={ styles.name }>{ description }</span>
          {!!courseLength &&
            <span className={ styles.length }>{ lengthToString(courseLength).join(' ') }</span>
          }
        </div>
      </li>
    </Link>
  );
};


export default Course;
