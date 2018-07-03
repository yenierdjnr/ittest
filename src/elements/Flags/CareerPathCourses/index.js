import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Link from 'gatsby-link';


const CareerPathCourses = ({ className='', title='Course Title', description='001-01', level, url }) => 

  <Link to={ url } className={ `${className} ${styles.link}` }>
    <li className={ `${className} ${styles.container}` }>
      <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      <div className={ styles.course }>
        <span className={ styles.name }>{ description }</span>
        <span className={ styles.name }>{ level }</span>
      </div>
    </li>
  </Link>

  ;


export default CareerPathCourses;
