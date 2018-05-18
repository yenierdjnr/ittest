import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const CareerPathCourses = ({ className='', title='Course Title', description='001-01', level, url }) => {
  return (

    <li className={ `${className} ${styles.container}` }>
      <div href={ url }>
        <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
        <div className={ styles.course }>
          <span className={ styles.name }>{ description }</span>
          <span className={ styles.name }>{ level }</span>
        </div>
      </div>
    </li>

  );
};


export default CareerPathCourses;
