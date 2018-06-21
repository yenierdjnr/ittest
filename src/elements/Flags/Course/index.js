import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Link from 'gatsby-link';

const lengthToString = (length) => {
    length = Number(length);
    var h = Math.floor(length / 3600);
    var m = Math.floor(length % 3600 / 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
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
